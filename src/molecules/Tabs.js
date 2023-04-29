import React from "react";

const Tabs = ({ tabs, activeTab, tabHandler }) => {
  return (
    <div className={`flex pb-5 overflow-x-auto ${tabs.length > 3 ? 'justify-start' : 'justify-center'} lg:justify-center`}>
      <div className="bg-white p-1 md:p-2 flex space-x-2 rounded-full mx-3 flex-shrink-0">
        {tabs.map((tab) => (
          <div key={tab.id} onClick={() => tabHandler(tab.value)} className={`px-3 ${activeTab === tab.value ? 'bg-primary-600 text-white' : 'text-primary-400'} cursor-pointer py-2 text-sm flex-shrink-0 rounded-full w-fit`}>
            {tab.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
