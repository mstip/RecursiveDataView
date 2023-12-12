import React, { useEffect, useState } from 'react';
import RecursiveDataView from './RecursiveDataView';

export default function DataPage() {
  const [rawData, setRawData] = useState('');
  const [prettyData, setPrettyData] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      try {
        if (rawData.length === 0) {
          return;
        }
        const parsed = JSON.parse(rawData);
        setPrettyData(JSON.stringify(parsed, null, 2));
      } catch (e) {
        setError('invalid json');
      }
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [rawData, 500]);

  function handleRawDataChange(event) {
    setRawData(event.target.value);
  }

  return (
    <>
      <h2>Data</h2>
      <hr />
      {error.length ? <div className="alert alert-danger">{error}</div> : null}
      <textarea
        className="form-control"
        onChange={handleRawDataChange}
        value={rawData}
      ></textarea>
      <hr />

      <h4>Table</h4>
      <div className="overflow-scroll">
        {prettyData.length ? (
          <RecursiveDataView data={JSON.parse(rawData)}></RecursiveDataView>
        ) : null}
      </div>
      <hr />
      <h4>PrettyPrint</h4>
      <pre className="bg-dark text-white p-4">{prettyData}</pre>
    </>
  );
}
