import * as React from 'react';

export type JumbotronProps = {
  title?: string;
  children: React.ReactNode;
};

export function Jumbotron({ title, children }: JumbotronProps) {
  return (
    <div className="px-12 sm:px-16 py-10 sm:py-12 rounded-lg bg-teal-200">
      {title && <h1 className="text-5xl text-gray-700">{title}</h1>}
      {children}
    </div>
  );
}
