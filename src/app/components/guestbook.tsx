"use client";
import React, { useState, useEffect } from "react";
import "../styles/guestbook.css";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";
import { format } from "date-fns"; // Optional: for better date formatting
import "../styles/guestbook.css";

interface Message {
  _id: string;
  userId?: string;
  username: string;
  message: string;
  createdAt: number;
}

const GuestbookForm: React.FC = () => {
  const [text, setText] = useState("");
  const createMessage = useMutation(api.guestbook.addMessage);
  const messages = useQuery(api.guestbook.getMessages) as Message[];
  const { user } = useUser();
  const [hasLeftMessage, setHasLeftMessage] = useState(false);

  useEffect(() => {
    if (user && messages) {
      const userMessage = messages.find(
        (message) => message.userId === user?.id,
      );
      setHasLeftMessage(!!userMessage);
    }
  }, [user, messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      await createMessage({
        userId: user.id,
        username: user.fullName || user.username || "",
        message: text,
      });
      setText("");
      setHasLeftMessage(true);
    }
  };

  return (
    <div className="guestbook-container">
      <div className="flex flex-col">
        {!user && (
          <div className="sign-in-button">
            <SignInButton
              mode="modal"
              forceRedirectUrl="#Guestbook"
              signUpForceRedirectUrl={"#Guestbook"}
            >
              <span>Sign in to leave a message</span>
            </SignInButton>
          </div>
        )}
      </div>
      <br></br>

      {user && (
        <div>
          {hasLeftMessage ? (
            <div className="text-sm text-neutral-500">
              You have already left a message.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="guestbook-form">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                placeholder="Leave a message here!"
              />
              <button type="submit">Sign</button>
            </form>
          )}
          <div className="sign-out-button">
            <SignOutButton redirectUrl="#Guestbook" />
          </div>
        </div>
      )}

      <div className="message-list">
        {messages?.map((note) => (
          <div key={note._id} className="message-item">
            <div className="header">
              <span className="username">{note.username}:</span>
              <span className="message">&nbsp;{note.message}</span>
              <div>
                <span className="timestamp">
                  {format(new Date(note.createdAt), "Pp")}
                </span>
              </div>
            </div>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestbookForm;
