import React, { useRef, useState } from "react";
import Nickname from "./components/Nickname";
import Toggle from "./components/Toggle";
import Channel from "./components/favoriteChannel";
import { User } from "./model/User";
import Id from "./components/Id";
import { ToggleData } from "@/src/model/ToggleData";
import { ChatCollectorData } from "@/src/model/ChatCollectorData";
import { FavoriteChannelData } from "@/src/model/FavoriteChannelData";
import {
  AppBody,
  AppContainer,
  AppHeader,
  Button,
  Input,
  InputContainer,
  ToggleList,
} from "./style";

export default function App(props: {
  nicks: User[];
  ids: User[];
  toggle: ToggleData;
  collector: ChatCollectorData;
  favoriteChannel: FavoriteChannelData[];
}) {
  const [nicks, setNicks] = useState(props.nicks);
  const [ids, setIds] = useState(props.ids);
  const [toggle, setToggle] = useState(props.toggle);
  const [collector, setCollector] = useState(props.collector);
  const [favoriteChannels, setFavoriteChannels] = useState(
    props.favoriteChannel
  );
  const nickInput = useRef<HTMLInputElement>(null);
  const idInput = useRef<HTMLInputElement>(null);

  const addNickBtnClick = () => {
    if (!nickInput.current || !nickInput.current.value) return;
    const nicknames = nicks.map((user) => user.user);
    if (nicknames.includes(nickInput.current?.value)) return;

    // if (nicks.includes(nickInput.current.value)) return;
    const newNicks = [...nicknames, nickInput.current.value].map(
      (nickname) => ({ isNickname: true, user: nickname })
    );
    chrome.storage.local.set({ nicks: newNicks }, () => {
      setNicks(newNicks);
      if (nickInput.current == null) return;
      nickInput.current.value = "";
    });
  };

  const addNickEnterClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!nickInput.current || !nickInput.current.value) return;
      const nicknames = nicks.map((user) => user.user);
      if (nicknames.includes(nickInput.current?.value)) return;

      // const newNicks = [...nicks, nickInput.current.value];
      const newNicks = [...nicknames, nickInput.current.value].map(
        (nickname) => ({ isNickname: true, user: nickname })
      );
      chrome.storage.local.set({ nicks: newNicks }, () => {
        setNicks(newNicks);
        if (nickInput.current == null) return;
        nickInput.current.value = "";
      });
    }
  };

  const addIdBtnClick = () => {
    if (!idInput.current || !idInput.current.value) return;
    const userIds = ids.map((user) => user.user);
    if (userIds.includes(idInput.current?.value)) return;

    // if (nicks.includes(nickInput.current.value)) return;
    const newIds = [...userIds, idInput.current.value].map((id) => ({
      isNickname: false,
      user: id,
    }));
    chrome.storage.local.set({ ids: newIds }, () => {
      setIds(newIds);
      if (idInput.current == null) return;
      idInput.current.value = "";
    });
  };

  const addIdEnterClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!idInput.current || !idInput.current.value) return;
      const userIds = ids.map((user) => user.user);
      if (userIds.includes(idInput.current?.value)) return;

      // const newNicks = [...nicks, nickInput.current.value];
      const newIds = [...userIds, idInput.current.value].map((id) => ({
        isNickname: false,
        user: id,
      }));
      chrome.storage.local.set({ ids: newIds }, () => {
        setIds(newIds);
        if (idInput.current == null) return;
        idInput.current.value = "";
      });
    }
  };

  const nicknameClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newNicks = nicks.filter(
      (item) => item.user !== e.currentTarget.innerHTML
    );
    chrome.storage.local.set({ nicks: newNicks }, () => {
      setNicks(newNicks);
    });
  };

  const idClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newIds = ids.filter(
      (item) => item.user !== e.currentTarget.innerHTML
    );
    chrome.storage.local.set({ ids: newIds }, () => {
      setIds(newIds);
    });
  };

  const changeToggle = (text: string) => {
    let newToggleData = {
      streamer: toggle.streamer,
      manager: toggle.manager,
      topfan: toggle.topfan,
      gudok: toggle.gudok,
      fan: toggle.fan,
      user: toggle.user,
    };
    if (text == "streamer") {
      newToggleData.streamer = !newToggleData.streamer;
    } else if (text == "manager") {
      newToggleData.manager = !newToggleData.manager;
    } else if (text == "topfan") {
      newToggleData.topfan = !newToggleData.topfan;
    } else if (text == "gudok") {
      newToggleData.gudok = !newToggleData.gudok;
    } else if (text == "fan") {
      newToggleData.fan = !newToggleData.fan;
    } else if (text == "user") {
      newToggleData.user = !newToggleData.user;
    }
    chrome.storage.local.set({ toggle: newToggleData }, () => {
      setToggle(newToggleData);
    });
  };

  const changeCollector = () => {
    let newChatCollector = { isUse: !collector.isUse };
    chrome.storage.local.set({ collector: newChatCollector }, () => {
      setCollector(newChatCollector);
    });
  };

  const onClickHome = () => {
    window.open("https://afreecatv.com", "_blank");
  };

  const onClickIssue = () => {
    window.open("https://github.com/taewooyo/afreecaTV-plus/issues", "_blank");
  };

  const onClickChannel = (e: React.MouseEvent<HTMLDivElement>, url: string) => {
    window.open(url, "_blank");
  };

  const onClickLogin = () => {
    window.open("https://login.afreecatv.com/afreeca/login.php", "_blank");
  };

  return (
    <AppContainer className="wrapper">
      <div>
        <AppHeader className="header">
          <span>AfreecaTV Plus</span>
        </AppHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <Button onClick={onClickHome} id="go-home">
            아프리카티비 이동하기
          </Button>
          <Button onClick={onClickIssue} id="go-issue">
            버그 제보
          </Button>
        </div>
        <AppBody>
          <ToggleList>
            <Toggle
              onChange={() => changeCollector()}
              label="채팅 콜렉터"
              value={collector.isUse}
            />
            <Toggle
              onChange={() => changeToggle("streamer")}
              label="BJ"
              value={toggle.streamer}
            />
            <Toggle
              onChange={() => changeToggle("manager")}
              label="매니저"
              value={toggle.manager}
            />
            <Toggle
              onChange={() => changeToggle("topfan")}
              label="열혈팬"
              value={toggle.topfan}
            />
            <Toggle
              onChange={() => changeToggle("gudok")}
              label="구독팬"
              value={toggle.gudok}
            />
            <Toggle
              onChange={() => changeToggle("fan")}
              label="팬클럽"
              value={toggle.fan}
            />
            <Toggle
              onChange={() => changeToggle("user")}
              label="일반유저"
              value={toggle.user}
            />
          </ToggleList>
          <InputContainer>
            <Input
              ref={nickInput}
              id="nickname-input"
              type="text"
              placeholder="닉네임을 입력하세요"
              onKeyUp={addNickEnterClick}
            />
            <Button onClick={addNickBtnClick} id="add-btn">
              닉네임 추가
            </Button>
          </InputContainer>
          <InputContainer>
            <Input
              ref={idInput}
              id="id-input"
              type="text"
              placeholder="아이디를 입력하세요"
              onKeyUp={addIdEnterClick}
            />

            <Button onClick={addIdBtnClick} id="add-btn">
              아이디 추가
            </Button>
          </InputContainer>
          <div className="nickname-container">
            <div className="nicknames">
              <Nickname nick={nicks} onClick={nicknameClick}>
                <h2
                  style={{
                    color: "#fff",
                    width: "100%",
                    margin: "0",
                    marginTop: "10px",
                    marginBottom: "0.25rem",
                    fontSize: "18px",
                    textAlign: "start",
                    fontWeight: "bold",
                  }}
                >
                  필터링 리스트
                </h2>
                <p
                  style={{
                    margin: "0",
                    fontSize: "14px",
                    textAlign: "start",
                  }}
                >
                  🌳 필터링 제거 방법
                </p>
                <p
                  style={{
                    margin: "0",
                    color: "#afafaf",
                    textAlign: "start",
                    fontSize: "12px",
                  }}
                >
                  닉네임 혹은 아이디를 클릭
                </p>
              </Nickname>
            </div>
            <div className="nicknames">
              <Id userId={ids} onClick={idClick}></Id>
            </div>
          </div>
        </AppBody>
      </div>
      <div
        style={{
          marginLeft: "10px",
        }}
      >
        {favoriteChannels.length > 0 ? (
          <Channel
            channels={favoriteChannels}
            onClick={(e, url) => onClickChannel(e, url)}
          />
        ) : (
          <button
            onClick={onClickLogin}
            style={{
              marginLeft: "5px",
              color: "#000",
              background: "linear-gradient(#C6F40AFF, #EDE80CFF)",
              borderRadius: "15px",
              border: "none",
              padding: "0.5rem 1rem",
              fontSize: ".875rem",
              fontWeight: "700",
              textDecoration: "auto",
              cursor: "pointer",
            }}
          >
            실시간으로 변경되는 즐겨찾기 리스트를 보기 위해서 로그인이
            필요합니다.
          </button>
        )}
      </div>
    </AppContainer>
  );
}
