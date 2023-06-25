import { useState } from "react";

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { Patient } from "~/types";

import HistoryTab from "./HistoryTab";

const TABS = [
  {
    label: "Informacion",
    value: "information",
  },
  {
    label: "Historial",
    value: "history",
  },
];

interface PatientTabsProps {
  history: Patient["appointments"];
}

const PatientTabs = ({ history }: PatientTabsProps) => {
  const [activeTab, setActiveTab] = useState("html");
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
        }}
      >
        {TABS.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-blue-500" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        <TabPanel key="information" value="information">
          <div>informacion</div>
        </TabPanel>
        <TabPanel key="history" value="history">
          <HistoryTab history={history} />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
};

export default PatientTabs;
