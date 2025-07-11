'use client';

import { useState } from 'react';
import { X, Pencil, Trash2 } from 'lucide-react';

type Teacher = {
    name: string;
    subject: string;
    email: string;
    status: string;
};

export default function TeachersPage() {
    const [showModal, setShowModal] = useState(false);
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [formData, setFormData] = useState<Teacher>({
        name: '',
        subject: '',
        email: '',
        status: 'active',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.subject || !formData.email || !formData.status) {
            alert('All fields are required!');
            return;
        }

        if (editIndex !== null) {
            const updated = [...teachers];
            updated[editIndex] = formData;
            setTeachers(updated);
            setEditIndex(null);
        } else {
            setTeachers((prev) => [...prev, formData]);
        }

        setFormData({ name: '', subject: '', email: '', status: 'active' });
        setShowModal(false);
    };

    const handleDelete = (index: number) => {
        const updated = [...teachers];
        updated.splice(index, 1);
        setTeachers(updated);
    };

    const handleEdit = (index: number) => {
        setFormData(teachers[index]);
        setEditIndex(index);
        setShowModal(true);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Teachers Management</h1>
            <p className="text-gray-600 mb-6">
                Keep track of all teachers, their assigned subjects, and current status. Use the tools below to maintain accurate records.
            </p>

            <div className="mb-4">
                <button
                    className="bg-[#1e1e2f] text-white px-4 py-2 rounded hover:opacity-90 cursor-pointer"
                    onClick={() => {
                        setFormData({ name: '', subject: '', email: '', status: 'active' });
                        setEditIndex(null);
                        setShowModal(true);
                    }}
                >
                    + Add Teacher
                </button>
            </div>

            {teachers.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
                        <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                            <tr>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Subject</th>
                                <th className="px-6 py-3">Email</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-700">
                            {teachers.map((t, i) => (
                                <tr
                                    key={i}
                                    className="border-t hover:shadow transition-shadow duration-200"
                                >
                                    <td className="px-6 py-4">{t.name}</td>
                                    <td className="px-6 py-4">{t.subject}</td>
                                    <td className="px-6 py-4">{t.email}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${t.status === 'active'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-700'
                                                }`}
                                        >
                                            {t.status}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-right space-x-3">
                                        <button
                                            className="text-blue-600 hover:text-blue-800 hover:cursor-pointer"
                                            title="Edit"
                                            onClick={() => handleEdit(i)}
                                        >
                                            <Pencil size={18} />
                                        </button>
                                        <button
                                            className="text-red-600 hover:text-red-800 hover:cursor-pointer"
                                            title="Delete"
                                            onClick={() => handleDelete(i)}
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-500">No teachers added yet.</p>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
                    <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            {editIndex !== null ? 'Edit Teacher' : 'Add Teacher'}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full border rounded px-3 py-2 mt-1 text-sm text-black"
                                    placeholder="Enter full name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full border rounded px-3 py-2 mt-1 text-sm text-black"
                                    placeholder="e.g. Science"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full border rounded px-3 py-2 mt-1 text-sm text-black"
                                    placeholder="example@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Status</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                    className="w-full border rounded px-3 py-2 mt-1 text-sm text-black"
                                    required
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>

                            <div className="flex justify-end gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 text-sm text-black border border-black rounded shadow hover:bg-black hover:text-white transition hover:opacity-90 cursor-pointer"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 hover:opacity-90 cursor-pointer"
                                >
                                    {editIndex !== null ? 'Update' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
