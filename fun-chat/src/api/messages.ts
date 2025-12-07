import { MessageHistoryRequest, MessageHistoryResponse, MsgDeleteRequest, MsgDeleteResponse, MsgEditPayload, MsgReadRequest, MsgReadResponse, MsgSendPayload, WSResponse } from "../utils/types";
import { sendRequest } from "./ws";

export async function sendMessage(to: string, text: string): Promise<WSResponse<MsgSendPayload>> {
  const from = localStorage.getItem('username') || '';
  const payload = {
    message: {
      from,
      to,
      text,
      datetime: Date.now(),
    }
  };
  return sendRequest('MSG_SEND', payload);
}

export async function getMessageHistory(userLogin: string): Promise<WSResponse<MessageHistoryResponse>> {
  const payload: MessageHistoryRequest = {
    user: {
      login: userLogin
    }
  }

  return sendRequest('MSG_FROM_USER', payload);
}

export async function getMessageReadStatus(messageId: string): Promise<WSResponse<MsgReadResponse>> {
  const payload: MsgReadRequest = {
    message: {
      id: messageId
    }
  };

  return sendRequest('MSG_READ', payload);
}

export async function getMessageDeleteStatus(messageId: string): Promise<WSResponse<MsgDeleteResponse>> {
  const payload: MsgDeleteRequest = {
    message: {
      id: messageId
    }
  };

  return sendRequest('MSG_DELETE', payload);
}

export async function editMessage(messageId: string, newText: string) {
  const payload: MsgEditPayload = {
    message: {
      id: messageId,
      text: newText,
    }
  }

  return sendRequest('MSG_EDIT', payload);
}