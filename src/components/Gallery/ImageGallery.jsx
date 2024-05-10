import React, { useState } from "react";
import './style.css';

const ImageGallery = ({ images }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        
            <div className="gallery-container">
            
                {images.map((image, index) => (
                    <div key={index} className="image-container" onClick={() => openModal(image)}>
                        <img src={image} alt={`Image ${index + 1}`} />
                    </div>
                ))}

                {isModalOpen && (
                    <div className="modal" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <img src={selectedImage} alt="Selected" />
                            <button className="close-button" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>

        
    );
};

export default ImageGallery;