import React, { Component } from "react";
import {
  ReactiveBase,
  DataSearch,
  MultiDataList,
  RangeSlider,
  DateRange,
  MultiList,
  SingleRange,
  SelectedFilters,
  ReactiveList
} from "@appbaseio/reactivesearch";
import "./App.css";
import Item from "./Item";

class App extends Component {
  render() {
    return (
      <div>
        <ReactiveBase
          app="MovieAppFinal"
          credentials="RxIAbH9Jc:6d3a5016-5e9d-448f-bd2b-63c80b401484"
          theme={{
            typography: {
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
              fontSize: "16px"
            },
            colors: {
              textColor: "#fff",
              backgroundColor: "#212121",
              primaryTextColor: "#fff",
              primaryColor: "#40C4FF",
              titleColor: "#fff",
              alertColor: "#d9534f",
              borderColor: "#666"
            }
          }}
        >
          <div style={{
            padding: 16,
            backgroundColor: '#212121'
          }}>
            <DataSearch
              componentId="mainSearch"
              dataField={["original_title"]}
              categoryField="title"
              queryFormat="and"
              placeholder="Search for movies..."
              iconPosition="right"
              showClear={true}
              autosuggest={false}
              filterLabel="search"
              innerClass={{
                input: 'search_input',
              }}
            />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            height: '100%'
          }}>
            <div
              style={{ flex: 1, backgroundColor: '#212121' }}
            >
              <div style={{ padding: 16, border: '1px solid #40C4FF', borderRadius: '10px' }}>
                <div style={{ marginBottom: 10 }}>
                  <b>Genre</b>
                </div>
                <MultiList
                  componentId="genres-list"
                  dataField="genres_data.raw"
                  className="genres-filter"
                  size={20}
                  sortBy="asc"
                  queryFormat="or"
                  selectAllLabel="All Genres"
                  showCheckbox={true}
                  showCount={true}
                  showSearch={true}
                  placeholder="Search for a Genre"
                  react={{
                    and: [
                      "mainSearch",
                      "results",
                      "date-filter",
                      "RangeSlider",
                      "language-list",
                      "revenue-list"
                    ]
                  }}
                  showFilter={true}
                  filterLabel="Genre"
                  URLParams={false}
                  innerClass={{
                    count: 'list_count'
                  }}
                />
                <hr />
                <div style={{ marginBottom: 10 }}>
                  <b>Revenue</b>
                </div>
                <SingleRange
                  componentId="revenue-list"
                  dataField="ran_revenue"
                  className="revenue-filter"
                  data={[
                    { start: 0, end: 1000, label: "< 1M" },
                    { start: 1000, end: 10000, label: "1M-10M" },
                    { start: 10000, end: 500000, label: "10M-500M" },
                    { start: 500000, end: 1000000, label: "500M-1B" },
                    { start: 1000000, end: 10000000, label: "> 1B" }
                  ]}
                  showRadio={true}
                  showFilter={true}
                  filterLabel="Revenue"
                  URLParams={false}
                  innerClass={{
                    label: "revenue-label",
                    radio: "revenue-radio"
                  }}
                />
                <hr />
                <div style={{ marginBottom: 10 }}>
                  <b>Rating</b>
                </div>
                <RangeSlider
                  componentId="RangeSlider"
                  dataField="vote_average"
                  className="review-filter"
                  range={{
                    start: 0,
                    end: 10
                  }}
                  rangeLabels={{
                    start: "0",
                    end: "10"
                  }}
                  react={{
                    and: [
                      "mainSearch",
                      "results",
                      "language-list",
                      "date-Filter",
                      "genres-list",
                      "revenue-list"
                    ]
                  }}
                />
                <hr />
                <div style={{ marginBottom: 10 }}>
                  <b>Language</b>
                </div>
                <MultiDataList
                  componentId="language-list"
                  dataField="original_language.raw"
                  className="language-filter"
                  size={100}
                  sortBy="asc"
                  queryFormat="or"
                  selectAllLabel="All Languages"
                  showCheckbox={true}
                  showSearch={true}
                  placeholder="Search for a language"
                  react={{
                    and: [
                      "mainSearch",
                      "results",
                      "date-filter",
                      "RangeSlider",
                      "genres-list",
                      "revenue-list"
                    ]
                  }}
                  data={[
                    {
                      label: "English",
                      value: "English"
                    },
                    {
                      label: "Chinese",
                      value: "Chinese"
                    },
                    {
                      label: "Turkish",
                      value: "Turkish"
                    },
                    {
                      label: "Swedish",
                      value: "Swedish"
                    },
                    {
                      label: "Russian",
                      value: "Russian"
                    },
                    {
                      label: "Portuguese",
                      value: "Portuguese"
                    },
                    {
                      label: "Korean",
                      value: "Korean"
                    },
                    {
                      label: "Japanese",
                      value: "Japanese"
                    },
                    {
                      label: "Italian",
                      value: "Italian"
                    },
                    {
                      label: "Hindi",
                      value: "Hindi"
                    },
                    {
                      label: "French",
                      value: "French"
                    },
                    {
                      label: "Finnish",
                      value: "Finnish"
                    },
                    {
                      label: "Spanish",
                      value: "Spanish"
                    },
                    {
                      label: "Deutsch",
                      value: "Deutsch"
                    }
                  ]}
                  showFilter={true}
                  filterLabel="Language"
                  URLParams={false}
                  innerClass={{
                    label: "list-item",
                    input: "list-input"
                  }}
                />
                <hr />
                <div style={{ marginBottom: 10 }}>
                  <b>Released Date</b>
                </div>
                <DateRange
                  componentId="date-filter"
                  dataField="release_date"
                />
                <div style={{ height: 10 }} />
                <SelectedFilters
                  showClearAll={true}
                  innerClass={{
                    button: 'filter_button'
                  }}
                  clearAllLabel="Clear filters"
                />
              </div>
            </div>
            <div
              style={{
                flex: 3,
                backgroundColor: '#212121',
                paddingLeft: 16,
                paddingRight: 16,
              }}
            >
              <ReactiveList
                componentId="results"
                dataField="original_title"
                react={{
                  and: [
                    "mainSearch",
                    "RangeSlider",
                    "language-list",
                    "date-filter",
                    "genres-list",
                    "revenue-list"
                  ]
                }}
                pagination={true}
                className="Result_card"
                paginationAt="bottom"
                pages={5}
                size={12}
                Loader="Loading..."
                noResults="No results were found..."
                sortOptions={[
                  {
                    dataField: "revenue",
                    sortBy: "desc",
                    label: "Sort by Revenue(High to Low) \u00A0"
                  },
                  {
                    dataField: "popularity",
                    sortBy: "desc",
                    label: "Sort by Popularity(High to Low)\u00A0 \u00A0"
                  },
                  {
                    dataField: "vote_average",
                    sortBy: "desc",
                    label: "Sort by Ratings(High to Low) \u00A0"
                  },
                  {
                    dataField: "original_title.raw",
                    sortBy: "asc",
                    label: "Sort by Title(A-Z) \u00A0"
                  }
                ]}
              >
                {({ data }) => (
                  <ReactiveList.ResultCardsWrapper>
                    {data.map(item => (
                      <Item
                        item={item}
                      />
                    ))}
                  </ReactiveList.ResultCardsWrapper>
                )}
              </ReactiveList>
            </div>
          </div>
        </ReactiveBase>
      </div>
    );
  }
}
export default App;