import React, { useState, useEffect} from 'react';
import { Loader, FormField, Card } from '../components';


function RenderCards({data, title}) {
  if (data?.length > 0) return data.map((post) => <Card key= {post._id} {...post} /> );
  return (
    <h2 className='mt-5 font-bold text-[#6469ff] text-xl uppercase'>{title}</h2>
  )
}

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);

      try {
        const response = await fetch('http://localhost:3000/api/v1/post', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          const result = await response.json();

          setAllPost(result.data.reverse());
         } 
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } 
    fetchPosts();
  }, [])

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPost.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedResults(searchResult);
      }, 500),
    );
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Community Showcase</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Browse through a collection of imaginative and visually stunning images donated by Dalle AI</p>
      </div>

      <div className="mt-16">
        <FormField 
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search something..."
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className="grid justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                Showing result for <span className='text-[#222328]'>{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3"> 
              {searchText ? (
                <RenderCards 
                  data={searchedResults}
                  title='No search result found'
                />
              ) : (
                <RenderCards 
                  data={allPost}
                  title='No Post Found'
                />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
