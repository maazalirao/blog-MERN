import { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { motion } from 'framer-motion';
import { FaImage, FaTimes } from 'react-icons/fa';

const WritePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const fileInputRef = useRef(null);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTagAdd = (e) => {
    e.preventDefault();
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission - replace with your API endpoint
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('tags', JSON.stringify(tags));
    if (coverImage) {
      formData.append('coverImage', coverImage);
    }

    try {
      // Replace with your API endpoint
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        // Handle successful submission
        console.log('Post created successfully');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Cover Image Upload */}
        <div className="relative">
          {previewImage ? (
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src={previewImage}
                alt="Cover preview"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => {
                  setCoverImage(null);
                  setPreviewImage('');
                }}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                <FaTimes />
              </button>
            </div>
          ) : (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="h-64 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-400"
            >
              <FaImage className="w-12 h-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">Click to upload cover image</p>
            </div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
        </div>

        {/* Title Input */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your blog title..."
          className="w-full text-3xl font-bold border-none focus:ring-0 bg-transparent placeholder-gray-400 dark:placeholder-gray-600"
        />

        {/* Tags Input */}
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm flex items-center"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleTagRemove(tag)}
                  className="ml-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
                >
                  <FaTimes className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
          <form onSubmit={handleTagAdd} className="flex">
            <input
              type="text"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              placeholder="Add tags..."
              className="flex-1 bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-0"
            />
            <button
              type="submit"
              className="ml-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
            >
              Add
            </button>
          </form>
        </div>

        {/* Rich Text Editor */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={modules}
            className="h-96 mb-12"
            theme="snow"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Publish Post
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default WritePost; 