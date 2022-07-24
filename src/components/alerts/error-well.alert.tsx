import React from 'react';

export default function AlertErrorWell({ title, message, children }) {
  return (
    <div className="bg-red-50 sm:rounded-lg mb-3">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-red-900">{title}</h3>
        <div className="mt-2 text-sm text-red-500">
          <p>{message}</p>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
