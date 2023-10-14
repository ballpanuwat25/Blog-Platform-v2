import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';

function Home() {
    const [blogs, setBlogs] = useState([]);
    const [statistics, setStatistics] = useState("");

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortBy, setSortBy] = useState("Popular Blogs");

    useEffect(() => {
        getBlogs();
        getStatistics();
    }, []);

    const getBlogs = async () => {
        try {
            const response = await axios.get('/src/data/blog.json');
            setBlogs(response.data.blogs);
        } catch (error) {
            console.error(error);
        }
    }

    const getStatistics = async () => {
        try {
            const response = await axios.get('/src/data/statistics.json');
            setStatistics(response.data.statistics);
        } catch (error) {
            console.error(error);
        }
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSortChange = (sort) => {
        setSortBy(sort);
    };

    const filteredBlogs = blogs
        .filter((blog) => {
            const matchesName = blog.title.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory = !selectedCategory || blog.category === selectedCategory;
            return matchesName && matchesCategory;
        })
        .sort((a, b) => {
            if (sortBy === "Popular Blogs") {
                return b.views - a.views;
            } else if (sortBy === "All Categories") {
                return a.id - b.id;
            }
        });

    return (
        <main className="flex flex-col min-h-screen">
            <Header />

            <div className='px-5 h-12 flex justify-between items-center my-2'>
                <Dropdown
                    onCategoryChange={handleCategoryChange}
                    onSortChange={handleSortChange}
                />

                <div className='border-b-2 w-1/2 flex justify-between border-orange-500 px-2'>
                    <input
                        type="text"
                        className="mr-2 w-full focus:outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="fa-solid fa-magnifying-glass text-2xl text-orange-400" />
                </div>
            </div>

            <div className="flex flex-grow flex-wrap justify-center items-center px-5 lg:grid lg:grid-cols-3 lg:gap-6 xl:grid-cols-5">
                {filteredBlogs.map((blog) => (
                    <Card key={blog.id} blog={blog} />
                ))}
            </div>

            <Footer statistics={statistics} />
        </main>
    );
}

export default Home;
