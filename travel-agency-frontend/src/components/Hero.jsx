import React from "react";
import styled from "styled-components";
import homeImage from "../assets/hero.png";

export default function Hero() {
    return (
        <Section id="hero">
            <div className="background">
                <img src={homeImage} alt="Scenic View" />
            </div>
            <div className="content">
                <div className="title">
                    <h1>Journey Through Beauty</h1>
                    <p>
                        A captivating exploration of the island's rich landscapes,
                        vibrant culture, and historic treasures. From golden beaches to misty highlands,
                        this journey uncovers the natural and cultural wonders of Sri Lanka,
                        offering an unforgettable experience for travelers.
                    </p>
                </div>
                {/* <div className="search"> */}
                {/*   <div className="container"> */}
                {/*     <label htmlFor="">Where you want to go</label> */}
                {/*     <input type="text" placeholder="Search Your location" /> */}
                {/*   </div> */}
                {/*   <div className="container"> */}
                {/*     <label htmlFor="">Check-in</label> */}
                {/*     <input type="date" /> */}
                {/*   </div> */}
                {/*   <div className="container"> */}
                {/*     <label htmlFor="">Check-out</label> */}
                {/*     <input type="date" /> */}
                {/*   </div> */}
                {/*   <button>Explore Now</button> */}
                {/* </div> */}
            </div>
        </Section>
    );
}

const Section = styled.section`
    position: relative;
    margin-top: 1rem;
    width: 100%;
    height: 80vh;

    .background {
        height: 100%;
        width: 100%;
        overflow: hidden;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            filter: brightness(40%);
            border-radius: 25px;
            animation: imageFadeIn 2s ease-in-out;
        }
    }

    .content {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 3;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        opacity: 0;
        animation: fadeIn 1s ease-in-out 0.5s forwards; /* Delay animation to match image fade-in */

        .title {
            color: white;

            h1 {
                font-size: 3rem;
                letter-spacing: 0.2rem;
                animation: textFadeIn 1s ease-in-out 0.5s forwards;
            }

            p {
                text-align: center;
                padding: 0 30vw;
                margin-top: 0.5rem;
                font-size: 1.2rem;
                animation: textFadeIn 1s ease-in-out 0.7s forwards;
            }
        }

        .search {
            display: flex;
            background-color: #ffffffce;
            padding: 0.5rem;
            border-radius: 0.5rem;

            .container {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                padding: 0 1.5rem;

                label {
                    font-size: 1.1rem;
                    color: #03045e;
                }

                input {
                    background-color: transparent;
                    border: none;
                    text-align: center;
                    color: black;

                    &[type="date"] {
                        padding-left: 3rem;
                    }

                    &::placeholder {
                        color: black;
                    }

                    &:focus {
                        outline: none;
                    }
                }
            }

            button {
                padding: 1rem;
                cursor: pointer;
                border-radius: 0.3rem;
                border: none;
                color: white;
                background-color: #4361ee;
                font-size: 1.1rem;
                text-transform: uppercase;
                transition: 0.3s ease-in-out;

                &:hover {
                    background-color: #023e8a;
                }
            }
        }
    }

    @keyframes imageFadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes textFadeIn {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media screen and (max-width: 980px) {
        height: 60vh;
        .background {
            img {
                object-fit: cover;
            }
        }

        .content {
            .title {
                h1 {
                    font-size: 2rem;
                }
                p {
                    font-size: 1rem;
                    padding: 0 5vw;
                }
            }

            .search {
                flex-direction: column;
                padding: 0.8rem;
                gap: 0.8rem;

                .container {
                    padding: 0 0.8rem;

                    input[type="date"] {
                        padding-left: 1rem;
                    }
                }

                button {
                    padding: 1rem;
                    font-size: 1rem;
                }
            }
        }
    }
`;
