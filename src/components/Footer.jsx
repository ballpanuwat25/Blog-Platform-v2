import React from 'react'

const Footer = ({ statistics }) => {
  return (
    <footer className="h-16 p-4 flex justify-between items-center">
      <div className='flex gap-3'>
        <p className="text-sm font-semibold">totalBlog: {statistics.totalBlogs}</p>
        <p className="text-sm font-semibold">totalViews: {statistics.totalViews}</p>
      </div>
      <div>
        <p className="text-sm font-semibold">Created by
          <a href='https://github.com/ballpanuwat25' className='underline text-orange-500 hover:text-orange-700'> ballpanuwat25</a> 🐙</p>
      </div>
    </footer>
  )
}

export default Footer
