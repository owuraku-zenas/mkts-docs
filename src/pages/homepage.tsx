import React from "react";
import styled from "styled-components";
import {
  Avatar,
  Box,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { useQueryParams } from "react-simple-widgets/dist/use-query-params";
import { useWindowBreakpoints } from "react-simple-widgets/dist/use-window-breakpoints";
import MeImg from "../assets/me.jpg";
import { IntroTab, UsageTab } from "../components";

const HomepageRoot = styled.div`
  --width: 300px;
  --lg-width: 400px;

  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 576px) {
    display: block;

    #sidebar {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 56px;
      width: var(--width);
    }

    #content {
      height: 100%;
      border-left: 1px solid #e3e3e3;
      margin-left: var(--width);
    }

    footer {
      position: absolute;
      left: 0;
      bottom: 0;
      width: var(--width);
    }
  }

  @media screen and (min-width: 992px) {
    --width: var(--lg-width);
  }

  #content {
    flex: 1 1;
    overflow: hidden;
  }
`;

const Sidebar = styled.div.attrs({ id: "sidebar" })`
  display: grid;
  place-items: center;
  padding: 3rem 3rem 1.5rem;
`;

const Content = styled.div.attrs({ id: "content" })``;

const Footer = styled.footer`
  text-align: center;
  border-top: 1px solid #e3e3e3;
`;

const tabs = ["installation", "usage"];

export default function Homepage() {
  const { qp, addQp } = useQueryParams();
  const { width } = useWindowBreakpoints();

  return (
    <HomepageRoot>
      <Sidebar>
        <Box textAlign="center">
          <Avatar src={MeImg} size="xl" mb={2} />

          <Text textAlign="center" fontSize="4xl" mb={0} lineHeight={1}>
            mkts
          </Text>

          <Text textAlign="center" fontSize="sm" fontStyle="italic" mb={2}>
            v3.0.0,{" "}
            <Link
              color="teal.500"
              href="https://github.com/kwameopareasiedu"
              isExternal>
              @kwameopareasiedu
            </Link>
          </Text>

          <Text textAlign="center" fontStyle="italic" mb={4}>
            Create modern web, api or library projects
            <br />
            with Typescript in seconds
          </Text>

          <Box textAlign="center">
            <a
              href="https://github.com/kwameopareasiedu/mkts"
              target="_blank"
              rel="noreferrer noopener">
              <Text as="i" className="bi bi-github" fontSize="2xl"></Text>
            </a>

            <span>&nbsp;&nbsp;&nbsp;</span>

            <a
              href="https://twitter.com/KOpareAsiedu"
              target="_blank"
              rel="noreferrer noopener">
              <Text as="i" className="bi bi-twitter" fontSize="2xl" />
            </a>
          </Box>
        </Box>
      </Sidebar>

      <Content>
        <Tabs
          height="100%"
          display="flex"
          overflow="hidden"
          flexDirection="column"
          variant="enclosed-colored"
          index={Math.max(0, tabs.indexOf(qp.tab))}
          onChange={index => addQp("tab", tabs[index])}
          isFitted={width < 576}>
          <TabList>
            <Tab>Installation</Tab>
            <Tab>Usage</Tab>
          </TabList>

          <TabPanels flex="1 1" overflow="auto">
            <TabPanel>
              <IntroTab />
            </TabPanel>
            <TabPanel>
              <UsageTab />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Content>

      <Footer>
        <Box py={4}>
          <Text>© mkts, {dayjs().year()}</Text>
        </Box>
      </Footer>
    </HomepageRoot>
  );
}
