import React, { createContext } from "react";

// Types (类型定义)
type Tab = {
  id: string; // Unique identifier (唯一标识符)
  path: string; // Route path (路由路径)
  title: string; // Display title (显示标题)
};

// Context interface (Context 接口)
interface TabsContextValue {
  tabs: Tab[]; // All opened tabs (所有打开的标签页)
  activeTabId: string; // Current active tab ID (当前激活的标签页ID)
  open: (tab: Omit<Tab, "id">) => void; // Open new tab (打开新标签页)
  close: (id: string) => void; // Close tab (关闭标签页)
  activate: (id: string) => void; // Activate tab (激活标签页)
  clear: () => void; // Close all tabs (关闭所有标签页)
}

// Create context (创建 Context)
export const TabsContext = createContext<TabsContextValue | null>(null);

// Provider component (Provider 组件)
export const TabsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // State management using localStorage for persistence (使用 localStorage 持久化状态)
  const [tabs, setTabs] = React.useState<Tab[]>(() => {
    const saved = localStorage.getItem("tabs");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeTabId, setActiveTabId] = React.useState<string>(() => {
    const saved = localStorage.getItem("activeTabId");
    return saved || "";
  });

  // Persist state changes (持久化状态变化)
  React.useEffect(() => {
    localStorage.setItem("tabs", JSON.stringify(tabs));
    localStorage.setItem("activeTabId", activeTabId);
  }, [tabs, activeTabId]);

  // Context value with memoized functions (带有记忆化函数的 Context 值)
  const value = React.useMemo(
    () => ({
      tabs,
      activeTabId,
      // Open new tab (打开新标签页)
      open: (tab: Omit<Tab, "id">) => {
        const id = `tab-${Date.now()}`;
        const newTab = { ...tab, id };
        setTabs((prev) => [...prev, newTab]);
        setActiveTabId(id);
      },
      // Close tab (关闭标签页)
      close: (id: string) => {
        setTabs((prev) => {
          const index = prev.findIndex((tab) => tab.id === id);
          if (index === -1) return prev;

          const newTabs = prev.filter((tab) => tab.id !== id);
          if (activeTabId === id && newTabs.length > 0) {
            // Activate adjacent tab (激活相邻标签页)
            const newActiveTab = newTabs[index] || newTabs[index - 1];
            setActiveTabId(newActiveTab.id);
          }
          return newTabs;
        });
      },
      // Activate tab (激活标签页)
      activate: (id: string) => {
        if (tabs.some((tab) => tab.id === id)) {
          setActiveTabId(id);
        }
      },
      // Clear all tabs (清空所有标签页)
      clear: () => {
        setTabs([]);
        setActiveTabId("");
      },
    }),
    [tabs, activeTabId],
  );

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
