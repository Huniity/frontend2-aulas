"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/slices/productSlice";
import type { AppDispatch, RootState } from "@/redux/store";

export default function ProductPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return <p className="p-6 text-sm text-zinc-600">Loading products...</p>;
    }

    if (error) {
        return <p className="p-6 text-sm text-red-600">{error}</p>;
    }

    return (
        <section className="mt-12 p-6">
            <h1 className="mb-6 text-2xl font-semibold text-zinc-900">Products</h1>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                {products.map((product) => (
                    <article
                        key={product.id}
                        className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm"
                    >
                        <h2 className="mb-2 text-lg font-medium text-zinc-900">{product.title}</h2>
                        <p className="text-sm text-zinc-600">${product.price}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
