import styled from "styled-components";
import { BREAKPOINTS } from "../styles/Breakpoints";
import { Button, Pagination } from "antd";
import Image from "next/image";
import Slider from "react-slick";

import React, { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainContainerThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 220px;
  align-items: center;
  width: 78.375rem;
  height: 33.375rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    margin-top: 52px;
    width: 16.5625rem;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    justify-content: center;
    align-items: center;
  }
`;

const MainDivTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: ${BREAKPOINTS.SM}) {
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 20rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const DivEleven = styled.div`
  display: flex;
  padding-top: 24px;
  gap: 24px;
  flex-direction: row;
  width: 1253px;
  height: 464px;

  @media (max-width: ${BREAKPOINTS.LG}) {
    flex-direction: row;
    margin-left: 10px;
    width: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 16.5625rem;
    height: auto;
    justify-content: center;
    align-items: center;
  }
`;

const CardDivOne = styled.div`
  margin-top: 24px;
`;

const CardDivTwo = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 394px;
  height: 467px;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 24px;
  padding-top: 16px;
  border-radius: 24px;
  box-shadow: 0px 4px 8px 0px #8585851a, 0px 14px 14px 0px #85858517,
    0px 32px 19px 0px #8585850d, 0px 56px 23px 0px #85858503,
    0px 88px 25px 0px #85858500;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: auto;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: auto;
    flex-direction: column;
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    width: auto;
    justify-content: center;
    align-items: center;
  }
`;

const DivNine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 41px;
`;

const DivTeen = styled.div`
  margin-top: 37px;
`;

const ButtonThree = styled(Button)`
  width: 173px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 2px solid;
  color: #c6b92d;
  border-color: #c6b92d;
  font-weight: 700;
  font-size: 20px;

  &:hover {
    color: black;
  }
  &:focus {
    color: black;
  }
`;

const ButtonFive = styled(Button)`
  width: 176px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 2px solid;
  color: white;
  border-color: #c6b92d;
  background-color: #c6b92d;
  font-weight: 700;
  font-size: 20px;

  &:hover {
    color: black;
  }
  &:focus {
    color: black;
  }
`;

const H3 = styled.h3`
  font-size: 2.8125rem;
  font-weight: 600;
  color: #6a0f65;
`;

const H6 = styled.h6`
  font-size: 25px;
  font-weight: 500;
`;

const P3 = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const StyledImageFive = styled(Image)``;

const StyledPagination = styled(Pagination)`
  .ant-pagination-item {
    border: none;
    background: transparent;
  }
`;

const YellowDot = styled.div`
  width: 18px;
  height: 18px;
  background-color: #c6b92d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

type Post = {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };

  og_title: string;
  og_description: string;

  yoast_head_json: {
    og_image: Array<{
      url: string;
      width: number;
      height: number;
      type: string;
    }>;
  };
};

const removeHtmlTagsAndLimit = (html: string, limit: number): string => {
  const text = html.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

const SessionFour = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<Post[]>("/api/posts");
        setPosts(response.data);
      } catch (error) {
        setError("Failed to fetch data");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePaginationChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <MainContainerThree>
        <MainDivTwo>
          <H3>Últimas do Blog</H3>
        </MainDivTwo>
        <DivEleven>
          {currentPosts.map((post) => (
            <CardDiv key={post.id}>
              {post.yoast_head_json.og_image[0]?.url && (
                <StyledImageFive
                  src={post.yoast_head_json.og_image[0].url}
                  alt={post.title.rendered}
                  width={400}
                  height={300}
                  layout="responsive"
                />
              )}
              <CardDivOne>
                <H6>{post.title.rendered}</H6>
                <CardDivTwo>
                  <P3>{removeHtmlTagsAndLimit(post.content.rendered, 50)}</P3>
                </CardDivTwo>
              </CardDivOne>
              <ButtonThree>Leia mais</ButtonThree>
            </CardDiv>
          ))}
        </DivEleven>
        <DivNine>
          <StyledPagination
            current={currentPage}
            total={posts.length}
            pageSize={postsPerPage}
            onChange={handlePaginationChange}
            itemRender={(page, type, originalElement) => {
              if (type === "page") {
                return page <= currentPage + 1 && page >= currentPage - 1 ? (
                  <YellowDot />
                ) : null;
              } else if (type === "prev" || type === "next") {
                return null;
              }
              return originalElement;
            }}
          />
          <DivTeen>
            <ButtonFive>Veja Mais</ButtonFive>
          </DivTeen>
        </DivNine>
      </MainContainerThree>
    </>
  );
};

export default SessionFour;
