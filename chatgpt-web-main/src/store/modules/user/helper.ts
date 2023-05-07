/*
 * @Descripttion:
 * @version:
 * @Author: zhengjieke
 * @Date: 2023-05-05 17:37:25
 * @LastEditors: JK
 * @LastEditTime: 2023-05-07 14:04:04
 */
import { ss } from "@/utils/storage";

const LOCAL_NAME = "userStorage";

export interface UserInfo {
	avatar: string;
	name: string;
	description: string;
}

export interface UserState {
	userInfo: UserInfo;
}

export function defaultSetting(): UserState {
	return {
		userInfo: {
			avatar: "http://112.124.16.133:8000/static/logo.bcc53d2e.svg",
			name: "JK",
			description: "测试时长两年半",
		},
	};
}

export function getLocalState(): UserState {
	const localSetting: UserState | undefined = ss.get(LOCAL_NAME);
	return { ...defaultSetting(), ...localSetting };
}

export function setLocalState(setting: UserState): void {
	ss.set(LOCAL_NAME, setting);
}
