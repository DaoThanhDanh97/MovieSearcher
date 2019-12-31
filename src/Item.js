import React from 'react';

class RowItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{
        flexDirection: 'column',
        flex: 1,
      }}>
        <div>
          <span
            style={{
              fontSize: 22,
              color: 'white'
            }}
          >{this.props.title}</span>
        </div>
        <div>
          <span
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              color: 'white',
            }}
          >{this.props.content}</span>
        </div>
      </div>
    )
  }
}

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    }
  }

  render() {
    return (
      <div
        style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative', marginBottom: 12 }}
        className="main-description"
        onMouseEnter={(e) => this.setState({ isShown: true })}
        onMouseLeave={(e) => this.setState({ isShown: false })}
      >
        <div >
          <a
            target="#"
            href={"http://www.imdb.com/title/" + this.props.item.imdb_id}
          >
            <div >
              <img
                src={
                  "https://image.tmdb.org/t/p/w500" +
                  this.props.item.poster_path
                }
                alt={this.props.item.original_title}
                style={{
                  width: '500px',
                  height: '750px',
                }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
            <div style={{
              width: '500px',
              height: '750px',
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
              display: (this.state.isShown) ? 'flex' : 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                padding: '10px 0px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <span
                  style={{
                    fontSize: 22,
                    color: 'white',
                    fontStyle: 'italic',
                    textAlign: 'center',
                  }}
                >{this.props.item.tagline}</span>
              </div>
              <div style={{
                position: 'absolute',
                top: 0,
                width: '500px',
                height: '150px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                paddingLeft: 16,
                paddingRight: 16,
                flexDirection: 'column',
              }}>
                <div style={{
                  marginBottom: 8,
                  textAlign: 'center'
                }}>
                  <span style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center'
                  }}>
                    {this.props.item.original_title}
                  </span>
                </div>
                <span style={{ color: 'white' }}>Language: {this.props.item.original_language}</span>
              </div>
              <div style={{
                display: 'flex',
                position: 'absolute',
                bottom: 0,
                width: '500px',
                background: 'rgba(0, 0, 0, 0.6)',
                padding: 10,
                color: 'white',
                flexDirection: 'row'
              }}>
                <RowItem
                  title={'Imdb'}
                  content={`${this.props.item.vote_average}/10`}
                />
                <RowItem
                  title={'Time'}
                  content={this.props.item.time_str}
                />
                <RowItem
                  title={'Revenue'}
                  content={this.props.item.or_revenue}
                />
              </div>
            </div>
            </div>
            </a>
        </div>
      </div>

    );
  }
}