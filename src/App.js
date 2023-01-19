import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Searchbar from "./components/Searchbar/Searchbar";
import Modal from "./components/Modal/Modal";
import ImageGallery from "./components/ImageGallery/ImageGallery";

export default class App extends Component {
  state = {
    query: "",
    images: [],
    loading: false,
    page: 1,
    limit: 12,
    showModal: false,
    src: null,
  };
  handleSumbit = (data) => {
    this.setState({ query: data, images: [], loading: true });
  };

  fetchData = async () => {
    const { query, limit, page } = this.state;
    try {
      await axios
        .get(
          `https://pixabay.com/api/?key=32914614-95b095bbb6f5a4460af24bebb&q=${query}&image_type=photo&page=${page}`
        )
        .then((res) => {
          console.log(res);
          const data = res.data.hits;
          this.setState({
            images: data,
          });
        });
    } catch (error) {
      alert("Извините техничческие неполадки((");
    }
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchDataUpdate = async () => {
    const { query, page } = this.state;
    try {
      await axios
        .get(
          `https://pixabay.com/api/?key=32914614-95b095bbb6f5a4460af24bebb&q=${query}&page=${page}&image_type=photo`
        )
        .then((res) => {
          const data = res.data.hits;
          this.setState(({ images }) => ({
            images: [...images, ...data],
            loading: false,
          }));
        });
    } catch (error) {
      alert("Извините техничческие неполадки((");
    }
  };

  componentDidUpdate() {
    const { loading } = this.state;
    if (loading) {
      this.fetchDataUpdate();
    }
  }

  onClickLoad = () => {
    this.setState(({ page }) => ({
      page: page + 1,
      loading: true,
    }));
  };

  toggleModal = (src) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      src,
    }));
  };
  render() {
    const { loading, images, src, showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSumbit} />
        {images.length > 0 ? (
          <ImageGallery
            images={this.state.images}
            showModal={this.toggleModal}
          />
        ) : (
          <Loader />
        )}
        <Button onClickLoad={this.onClickLoad} />

        {showModal && (
          <Modal closeModal={this.toggleModal}>
            <img
              src={src}
              style={{ width: "70vw", height: "80vh", borderRadius: "5px" }}
            />
          </Modal>
        )}
      </div>
    );
  }
}
