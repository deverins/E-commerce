import React from 'react';
import data from '../data';

const TransferRates = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs sm:text-sm font-bold text-gray-500 tracking-wider">
                Logo
              </th>
              <th className="px-4 py-2 text-left text-xs sm:text-sm font-bold text-gray-500 tracking-wider">
                Rate
              </th>
              <th className="px-4 py-2 text-left text-xs sm:text-sm font-bold text-gray-500 tracking-wider hidden md:table-cell">
                Duration
              </th>
              <th className="px-4 py-2 text-left text-xs sm:text-sm font-bold text-gray-500 tracking-wider hidden md:table-cell">
                Transfer fee
              </th>
              <th className="px-4 py-2 text-left text-xs sm:text-sm font-bold text-gray-500 tracking-wider hidden md:table-cell">
                Received amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="shadow-sm">
                <td className="px-4 py-2 whitespace-nowrap">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12">
                      <img className="h-full w-full object-contain" src={item.logo} alt={item.name} />
                    </div>
                    <div className="mt-2 sm:mt-0 sm:ml-4">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500 md:hidden mt-2">
                        <div>Transfer fee: {item.fees}</div>
                        <div>Received amount: {item.receivedAmount}</div>
                        <div>Duration: {item.duration}</div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <div className="text-base text-gray-900">{item.rate}</div>
                </td>
                <td className="px-4 py-2 whitespace-nowrap hidden md:table-cell">
                  <div className="text-base text-gray-900">{item.duration}</div>
                </td>
                <td className="px-4 py-2 whitespace-nowrap hidden md:table-cell">
                  <div className="text-base text-gray-900">{item.fees}</div>
                </td>
                <td className="px-4 py-2 whitespace-nowrap hidden md:table-cell">
                  <div className="text-base text-gray-900">{item.receivedAmount}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransferRates;
