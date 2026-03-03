"use client";

import { useState } from "react";
import {
    Card,
    CardBody,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import {
    FaEllipsisH,
    FaEyeSlash,
    FaUndo,
    FaVideo,
    FaExclamationTriangle,
    FaCog
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ReelViewer from "./ReelViewer";

const ReelsList = () => {
    const [viewerOpen, setViewerOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    // Section hide state
    const [sectionHidden, setSectionHidden] = useState(false);

    const [reels, setReels] = useState([
        { id: 1, video: "https://www.w3schools.com/html/mov_bbb.mp4", hidden: false },
        { id: 2, video: "https://www.w3schools.com/html/movie.mp4", hidden: false },
        { id: 3, video: "https://www.w3schools.com/html/mov_bbb.mp4", hidden: false },
        { id: 4, video: "https://www.w3schools.com/html/mov_bbb.mp4", hidden: false }
    ]);

    // Hide individual reel
    const handleHideReelUnique = (id) => {
        setReels(prev =>
            prev.map(r => (r.id === id ? { ...r, hidden: true } : r))
        );
    };

    // Undo individual reel
    const handleUndoReelUnique = (id) => {
        setReels(prev =>
            prev.map(r => (r.id === id ? { ...r, hidden: false } : r))
        );
    };

    return (
        <>
            <Card className="border-0 shadow-sm mt-3">
                <CardBody>

                    {/* HEADER */}
                    <div className="d-flex justify-content-between mb-3">
                        <h6 className="fw-bold mb-0">
                            <FaVideo className="me-1" /> Reels
                        </h6>

                        <UncontrolledDropdown>
                            <DropdownToggle tag="span" style={{ cursor: "pointer" }}>
                                <FaEllipsisH />
                            </DropdownToggle>

                            <DropdownMenu end>
                                <DropdownItem onClick={() => setSectionHidden(true)}>
                                    <FaEyeSlash className="me-2" />
                                    Hide
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>

                    {/* SECTION CONTENT */}
                    {!sectionHidden ? (
                        <Swiper
                            modules={[Navigation]}
                            navigation
                            spaceBetween={5}
                            breakpoints={{
                                0: { slidesPerView: 2 },
                                768: { slidesPerView: 3 }
                            }}
                        >
                            {reels.map((item, index) => (
                                <SwiperSlide key={item.id}>
                                    <div className="position-relative">

                                        {/* INDIVIDUAL REEL DROPDOWN */}
                                        <UncontrolledDropdown className="position-absolute top-0 end-0 m-2 z-3">
                                            <DropdownToggle
                                                tag="span"
                                                className="text-white"
                                                style={{ cursor: "pointer" }}
                                            >
                                                <FaEllipsisH />
                                            </DropdownToggle>

                                            <DropdownMenu end>
                                                <DropdownItem
                                                    onClick={() => handleHideReelUnique(item.id)}
                                                >
                                                    <FaEyeSlash className="me-2" />
                                                    Hide reel
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>

                                        {/* VIDEO OR HIDDEN STATE */}
                                        {!item.hidden ? (
                                            <video
                                                src={item.video}
                                                className="w-100 rounded"
                                                style={{
                                                    height: "320px",
                                                    objectFit: "cover",
                                                    cursor: "pointer"
                                                }}
                                                muted
                                                onMouseEnter={(e) => e.target.play()}
                                                onMouseLeave={(e) => {
                                                    e.target.pause();
                                                    e.target.currentTime = 0;
                                                }}
                                                onClick={() => {
                                                    setActiveIndex(index);
                                                    setViewerOpen(true);
                                                }}
                                            />
                                        ) : (
                                            <div
                                                className="d-flex flex-column justify-content-center align-items-center bg-dark text-white rounded"
                                                style={{ height: "320px" }}
                                            >
                                                <FaEyeSlash size={24} />
                                                <p className="mb-2 text-white small">
                                                    Reel hidden
                                                </p>

                                                <button
                                                    className="btn btn-light btn-sm"
                                                    onClick={() => handleUndoReelUnique(item.id)}
                                                >
                                                    <FaUndo className="me-1" />
                                                    Undo
                                                </button>
                                            </div>
                                        )}

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        /* SECTION HIDDEN CARD */
                        <div className="p-3 border rounded bg-light">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>Hidden</strong>
                                    <div className="small text-muted">
                                        Hiding posts helps us personalise your Feed.
                                    </div>
                                </div>

                                <button
                                    className="btn btn-outline-primary btn-sm"
                                    onClick={() => setSectionHidden(false)}
                                >
                                    <FaUndo className="me-1" />
                                    Undo
                                </button>
                            </div>

                            <hr />

                            <div className="small text-muted">
                                <div className="mb-2" style={{ cursor: "pointer" }}>
                                    <FaExclamationTriangle className="me-2" />
                                    Report post
                                </div>

                                <div style={{ cursor: "pointer" }}>
                                    <FaCog className="me-2" />
                                    Content preferences
                                </div>
                            </div>
                        </div>
                    )}

                </CardBody>
            </Card>

            {/* FULL SCREEN VIEWER */}
            {viewerOpen && (
                <ReelViewer
                    reels={reels}
                    startIndex={activeIndex}
                    onClose={() => setViewerOpen(false)}
                />
            )}
        </>
    );
};

export default ReelsList;