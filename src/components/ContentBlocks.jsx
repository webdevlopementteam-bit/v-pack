// Shared building blocks for the long-form plant / product pages.

export function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {headers.map((header) => (
              <th
                key={header}
                className="p-3 text-[16px] lg:text-[18px] font-bold text-gray-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-[16px] lg:text-[18px]">
          {rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`p-3 ${i === 0 ? "text-gray-600" : "text-gray-800"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Renders [title, detail, separator?] items as "**title** — detail" bullet points.
export function BoldList({ items, separator = " — ", ordered = false }) {
  const List = ordered ? "ol" : "ul";
  return (
    <List
      className={`${ordered ? "list-decimal" : "list-disc"} pl-6 space-y-2`}
    >
      {items.map(([title, detail, itemSeparator]) => (
        <li key={title}>
          <span className="font-bold text-gray-900">{title}</span>
          {detail && (
            <>
              {itemSeparator ?? separator}
              {detail}
            </>
          )}
        </li>
      ))}
    </List>
  );
}

export function QuickAnswer({ children }) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-600 rounded-sm p-4 sm:p-5 text-[16px] lg:text-[18px] text-gray-700">
      <p>
        <span className="font-bold text-gray-900">Quick Answer:</span>{" "}
        {children}
      </p>
    </div>
  );
}

export function FaqList({ faqs }) {
  return (
    <div className="space-y-6 text-[16px] lg:text-[18px]">
      {faqs.map(({ question, answer }, i) => (
        <div key={question}>
          <h3 className="font-bold text-gray-900 mb-1">
            {i + 1}. {question}
          </h3>
          <p className="text-gray-700">{answer}</p>
        </div>
      ))}
    </div>
  );
}
