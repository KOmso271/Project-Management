'use client'
import { useSearchQuery } from '@/state/api';
import debounce from 'lodash/debounce';
import React, { useState, useEffect, useMemo } from 'react';
import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const {
        data: searchResults,
        isLoading,
        isError,
    } = useSearchQuery(searchTerm, {
        skip: searchTerm.length < 3,
    });
    const handleSearch = useMemo(() => 
        debounce((event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(event.target.value);
        }, 500),
    []);

    useEffect(() => {
        return () => handleSearch.cancel();
    }, [handleSearch]);

    return (
        <div className="p-8">
            <Header name="Search" />
            <div className="mt-5">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full max-w-2xl rounded-md border border-gray-300 p-3 shadow focus:border-blue-primary focus:outline-none dark:border-dark-tertiary dark:bg-dark-secondary dark:text-white"
                    onChange={handleSearch}
                />
            </div>

            <div className="p-5">
                {isLoading && <p className="dark:text-white">Searching...</p>}
                {isError && <p className="text-red-500">Error occurred while fetching search results.</p>}
                
                {!isLoading && !isError && searchResults && (
                    <div className="grid grid-cols-1 gap-4">
                        {Array.isArray(searchResults) && searchResults.length > 0 ? (
                            <>
                                <h2 className="text-xl font-bold dark:text-white">Tasks Found</h2>
                                {searchResults.map((task: any) => (
                                    <TaskCard key={task.id} task={task} />
                                ))}
                            </>
                        ) : (
                            searchTerm.length >= 3 && (
                                <p className="dark:text-white text-gray-500">
                                    No tasks found for "{searchTerm}"
                                </p>
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;