class LogParser {
    static parse(logs: string): object[] {
      const logArray = logs.split('\n').filter(Boolean);
  
      const parsedLogs = logArray.map(log => {
        const [timestamp, level, details] = log.split(' - ');
        const logData = JSON.parse(details);
        return {
          timestamp: new Date(timestamp).getTime(),
          loglevel: level.trim(),
          transactionId: logData.transactionId,
          err: logData.err || '',
        };
      });
  
      const filteredLogs = parsedLogs.filter(log => ['error', 'warn'].includes(log.loglevel));
      return filteredLogs;
    }
  }
  
  export default LogParser;
  