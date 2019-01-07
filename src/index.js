import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Footer from './components/footer';

const API_KEY = 'AIzaSyBTYTfzgtno0O712iFnEpBVWExIt7sELbE';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        };

        this.videoSearch('');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term }, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0],
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                {/* pass object videos from parent App to => child VideoList */}
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
                <Footer />
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
