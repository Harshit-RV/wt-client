import axios from "axios";
import { MonitorProps } from "../../types/monitor";

interface CreateMonitorProps extends MonitorProps {
  token: string;
}

export const createMonitor = async (args: CreateMonitorProps) => {
  try {
      await axios.post('http://localhost:8080/monitor/create', {
          monitorUrl: args.monitorUrl,
          alertCondition: args.alertCondition,
          email: args.email,
      }, {
          headers: {
              Authorization: `Bearer ${args.token}`
          }
      })
  } catch (error) {
      console.log(error);
  }
}