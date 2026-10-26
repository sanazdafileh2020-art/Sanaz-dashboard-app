'use client';

import { useState } from 'react';
import type { CustomerField } from '@/app/lib/definitions';

export function CustomerField({
  customers,
}: {
  customers: CustomerField[];
}) {
  const [selectedCustomer, setSelectedCustomer] = useState('');

  return (
    <select
      id="customer"
      name="customerId"
      value={selectedCustomer}
      onChange={(event) => setSelectedCustomer(event.target.value)}
      className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2"
      required
    >
      <option value="" disabled>
        Select a customer
      </option>

      {customers.map((customer) => (
        <option key={customer.id} value={customer.id}>
          {customer.name}
        </option>
      ))}
    </select>
  );
}
