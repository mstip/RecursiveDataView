import React from 'react';

export default function RecursiveDataView({ data }) {
  if (Array.isArray(data)) {
    return (
      <table className="table table-bordered table-sm table-hover">
        <tbody>
          <tr>
            {Object.entries(data).map((i) => (
              <td key={i[0]}>
                <RecursiveDataView data={i[1]}></RecursiveDataView>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  } else if (typeof data === 'object') {
    return (
      <table className="table table-bordered table-sm table-hover ">
        <tbody>
          {Object.entries(data).map((i) => (
            <tr key={i[0]}>
              <td>{i[0]}</td>
              <td>
                <RecursiveDataView data={i[1]}></RecursiveDataView>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else if (typeof data === 'number') {
    return <>{new Intl.NumberFormat('de-DE').format(data)}</>;
  }
  return <>{JSON.stringify(data)}</>;
}
