'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { BlogFrontmatter } from '@/utils/mdx';
import { Search, Filter, Calendar, User, Clock, Tag, X } from 'lucide-react';

interface BlogListClientProps {
  blogs: BlogFrontmatter[];
  categories: string[];
  locale: string;
}

export default function BlogListClient({ blogs, categories, locale }: BlogListClientProps) {
  const [filteredBlogs, setFilteredBlogs] = useState<BlogFrontmatter[]>(blogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    let filtered = blogs;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(blog => (blog.category || 'Uncategorized') === selectedCategory);
    }

    setFilteredBlogs(filtered);
  }, [blogs, searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-center text-4xl font-bold text-brand-dark md:text-left">
            Blog Posts
          </h1>
          <p className="text-center text-gray-600 md:text-left">
            Discover insights, tutorials, and updates from our team
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-200 pl-10 pr-4 py-2 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
              />
            </div>

            {/* Filter Toggle */}
            <button
              type="button"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center …"
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>


            {/* Desktop Categories */}
            <div className="hidden md:flex md:items-center md:gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${selectedCategory === category
                      ? 'bg-brand-accent text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Filter Panel */}
          {isFilterOpen && (
            <div className="mt-4 border-t pt-4 md:hidden">
              <h3 className="mb-3 font-medium text-gray-900">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      selectedCategory === category ? 'bg-brand-accent text-white':'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Active Filters */}
          {(searchTerm || selectedCategory !== 'All') && (
            <div className="mt-4 flex items-center gap-2 border-t pt-4">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-accent/10 px-3 py-1 text-sm text-brand-accent">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm('')}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedCategory !== 'All' && (
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-accent/10 px-3 py-1 text-sm text-brand-accent">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory('All')}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              <button
                onClick={clearFilters}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blogs found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-brand-accent hover:text-brand-accent/80"
            >
              Clear filters to see all blogs
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/${locale}/blog/${blog.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-brand-accent/20"
              >
                <article className="flex h-full flex-col">
                  {/* Blog Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand-accent px-3 py-1 text-xs font-medium text-white">
                        <Tag className="h-3 w-3" />
                        {blog.category || 'Uncategorized'}
                      </span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="mb-3 text-xl font-semibold text-brand-dark group-hover:text-brand-accent transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="mb-4 text-gray-600 flex-1 line-clamp-3">{blog.description}</p>

                    {/* Blog Meta */}
                    <div className="mt-auto space-y-3">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{blog.author}</span>
                        </div>
                        {blog.readTime && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{blog.readTime}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={blog.date}>
                          {new Date(blog.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
