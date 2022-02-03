import { CancelOutlined, ClearAllRounded, Close, Delete, Remove, Search } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, Pagination, TextField } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import ItemUser from "../components/item_user";
import { BASE_URL, SEARCH_USER } from "../etc/constants";
import BaseLayout from "../layout/base_layout";
import { searchUser } from "../services/user_services";
import { store, updateFilter } from '../store/global_state';

export default function Home() {
  const mode = store.getState().dark_mode
  const filter = store.getState().filter
  const [isDarkMode, setIsDarkMode] = React.useState(mode);
  const [result, setResult] = React.useState(null);
  const [keyword, setKeyword] = React.useState(filter.keyword);
  const [selectedPage, setSelectedPage] = React.useState(filter.page);

  useEffect(() => {

  }, [])

  useEffect(() => {
    searchUser(keyword, selectedPage, setResult)
    store.dispatch(updateFilter({ keyword: keyword, page: selectedPage }))
  }, [keyword, selectedPage])

  store.subscribe(() => {
    const isDarkMode = store.getState().dark_mode
    setIsDarkMode(isDarkMode)
  })

  return (
    <BaseLayout title="Search">
      <div className="flex flex-1 justify-center w-full h-full flex-col content-start">
        <TextField id="outlined-basic" variant="outlined" placeholder="Enter GitHub username, i.e. gaeron"
          className="w-full p-4" onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setKeyword('')}>
                  <CancelOutlined />
                </IconButton>
              </InputAdornment>
            ),
          }} />
        {result ? (
          <Box overflow="auto" flex={1} flexDirection="column" display="flex" p={2}>
            {result.items.length > 0 ? (<p className={`text-md mb-4 ${isDarkMode ? 'text-neutral-50' : ''}`}>{result.total_count} GitHub users found</p>) : (<>  </>)}
            <div className={'flex flex-1 flex-col p-0 ' + (isDarkMode ? 'text-neutral-50' : '')}>
              {
                result.items.length !== 0 ? (
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    {
                      result.items?.map((item, index) => {
                        item.keyword = keyword

                        return (
                          <ItemUser key={index} {...item} isDarkMode={isDarkMode} />
                        )
                      })
                    }
                  </div>
                ) : (
                  <ZeroResultInfo keyword={keyword} isDarkMode={isDarkMode} />
                )
              }
              <Pagination count={result?.items?.length || 0} variant="outlined"
                onChange={(event, page) => setSelectedPage(page)}
                className="self-center my-8" />
            </div>
          </Box>
        ) : (
          <HintsInfo isDarkMode={isDarkMode} />
        )}
      </div>
    </BaseLayout>
  )
}

const HintsInfo = ({ isDarkMode }) => (
  <div className="flex flex-1 flex-col">
    <div className="flex w-72 h-64 relative p-4 self-center">
      <Image alt="github image" src="/github_img.png"
        layout="fill"
        objectFit="scale-down"
      />
    </div>
    <p className={"w-1/2 text-center self-center font-light " + (isDarkMode ? 'text-neutral-300' : 'text-gray-400')}>
      Enter GitHub username and search users matching the input like Google Search, click avatars to view more details, including repositories, followers and following.
    </p>
  </div>
)

const ZeroResultInfo = ({ isDarkMode, keyword }) => (
  <div className="flex flex-1 flex-col justify-center align-middle items-center ">
    <p className={"w-1/2 text-center " + (isDarkMode ? 'text-neutral-50' : '')}>
      <Search fontSize="large" /> <br /> No search result found for
    </p>
    <p><b>{keyword}</b></p>
  </div>
)