import React from 'react';
import styled from 'styled-components';
// import GitHub from '@material-ui/icons/GitHub';
import GitHubIcon from '@mui/icons-material/GitHub';
// import PublicIcon from '@material-ui/icons/Public';
import PublicIcon from '@mui/icons-material/Public';

function Menu({ menuItem }) {
    return (
        <MenuItemStyled >
            {
                menuItem.map((item) => {
                    return (
                        <div className="grid-item" key={item.id}>
                            <div className="portfolio-content">
                                <div className="portfolio-image">
                                    <img src={item.image} alt="" />
                                    <ul>
                                        <li>
                                            <a href={item.link1} target="_blank" rel="noopener noreferrer">
                                                <GitHubIcon />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={item.link2} target="_blank" rel="noopener noreferrer">
                                                <PublicIcon />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <h6>{item.title}</h6>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    );
                })
            }
        </MenuItemStyled>
    );
}

const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width:920px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:670px){
        grid-template-columns: repeat(1, 1fr);
    }
    .grid-item{
        .portfolio-content{
            display: block;
            position: relative;
            overflow: hidden;
            h6{
                font-size: 1.5rem;
            }
            img{
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }
            ul{
                transform: translateY(-600px);
                transition: all .4s ease-in-out;
                position: absolute;
                left: 50%;
                top: 40%;
                opacity: 0;
                li{
                    background-color: var(--border-color);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    border-radius: 50%;
                    width: 3rem;
                    height: 3rem;
                    margin: 0 .5rem;
                    transition: all .4s ease-in-out;
                    &:hover{
                        background-color: var(--primary-color);
                    }
                    a{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all .4s ease-in-out;
                    }
                }
            }
            .portfolio-image{
                &::before{
                    content: "";
                    position: absolute;
                    left: 2%;
                    top: 4%;
                    height: 0;
                    width: 0;
                    transition: all .4s ease-in-out;
                }
            }
            .portfolio-image:hover{
                ul{
                    transform: translateY(0);
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all .4s ease-in-out;
                    opacity: 1;
                    li{
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
                    li:hover{
                        svg{
                            color: var(--white-color);
                        }
                    }
                    svg{
                        font-size: 2rem;
                    }
                }
                &::before{
                    height: calc(100% - 32%);
                    width: calc(100% - 4%);
                    background-color: white;
                    opacity: 0.9;
                    transform-origin: left;
                    transition: all .4s ease-in-out;
                }
            }
        }
    }
`;

export default Menu;
