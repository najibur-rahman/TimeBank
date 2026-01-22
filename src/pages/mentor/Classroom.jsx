import { useState, useRef, useEffect } from "react";
import { Mic, Video, Monitor, Hand, Users } from "lucide-react";
import Editor from "@monaco-editor/react";

const participants = [
  { id: 1, name: "You", color: "bg-emerald-500" },
  { id: 2, name: "Student", color: "bg-pink-500" },
];

export default function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Nahid Rahman",
      text: "How to structure compound components in React?",
      time: "Just now",
      type: "incoming",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [activeTool, setActiveTool] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        user: "You",
        text: newMessage.trim(),
        time: "Just now",
        type: "outgoing",
      };
      setMessages((prev) => [...prev, message]);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex justify-center py-4">
      <div className="w-full max-w-6xl bg-slate-900 rounded-xl shadow-lg border border-slate-800 p-4 space-y-4">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-sm font-semibold text-slate-100">
              Advanced React Patterns
            </h1>
            <p className="text-xs text-slate-400">Virtual Classroom Session</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-3 py-1 rounded-md text-xs bg-slate-800 text-slate-300 border border-slate-700">
              Mentor: Najibur Rahman
            </button>
            <button className="px-4 py-2 rounded-md text-xs font-semibold bg-emerald-500 text-slate-900 hover:bg-emerald-400">
              Join Class
            </button>
          </div>
        </header>

        {/* Main layout */}
        <div className="grid grid-cols-12 gap-4">
          {/* Video + Tools Area */}
          <div className="col-span-8 space-y-3">
            {/* Dynamic Tool/Video Area */}
            <div className="aspect-video w-full rounded-lg bg-slate-950 border border-slate-700 relative overflow-hidden">
              {activeTool === "whiteboard" && <SimpleWhiteboard onClose={() => setActiveTool(null)} />}
              {activeTool === "code" && <SimpleCodeEditor onClose={() => setActiveTool(null)} />}
              {activeTool === null && (
                <div className="flex items-center justify-center text-slate-600 text-xs h-full">
                  Video Stream
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <IconButton Icon={Mic} label="Mic" />
                <IconButton Icon={Video} label="Camera" />
                <IconButton Icon={Monitor} label="Share" />
                <IconButton Icon={Hand} label="Files" />
                <IconButton Icon={Users} label="Settings" />
              </div>

              <button className="px-5 py-2 rounded-lg bg-rose-600 text-xs font-semibold hover:bg-rose-500 text-white">
                End Class
              </button>
            </div>

            {/* Participants */}
            <div className="mt-2">
              <h2 className="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1">
                Participants <span className="text-[10px] text-slate-500">(2)</span>
              </h2>
              <div className="flex items-center gap-2">
                {participants.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-2 px-2 py-1 rounded-full bg-slate-800 text-[11px]"
                  >
                    <span className={`w-2 h-2 rounded-full ${p.color}`}></span>
                    <span className="text-slate-200">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="col-span-4 space-y-3">
            {/* Chat */}
            <div className="flex-1 px-3 py-2 text-[11px] text-slate-400 space-y-2 overflow-y-auto max-h-96">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${
                    msg.type === "outgoing" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white ${
                      msg.type === "outgoing" ? "bg-sky-500" : "bg-purple-500"
                    }`}
                  >
                    {msg.user?.[0] || "U"}
                  </div>
                  <div
                    className={`max-w-xl rounded-2xl px-4 py-3 text-sm whitespace-pre-line ${
                      msg.type === "outgoing"
                        ? "bg-sky-100 text-slate-800"
                        : "bg-slate-100 text-slate-800"
                    }`}
                  >
                    <div className="text-[10px] font-medium text-slate-500 mb-1">
                      {msg.user}
                    </div>
                    <div>{msg.text}</div>
                    <div className="text-[9px] text-slate-400 mt-1">{msg.time}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <div className="px-3 py-2 border-t border-slate-800">
              <form onSubmit={sendMessage} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 bg-slate-900/60 border border-slate-700 rounded-md px-3 py-2 text-[11px] placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                />
                <button
                  type="submit"
                  className="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 rounded-lg flex items-center justify-center shrink-0 transition-all"
                  disabled={!newMessage.trim()}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Tool Buttons */}
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 space-y-2">
              <button
                onClick={() => setActiveTool("whiteboard")}
                className="w-full py-2 text-xs font-semibold rounded-md bg-slate-800 text-slate-100 hover:bg-slate-700"
              >
                📋 Open Whiteboard
              </button>
              <button
                onClick={() => setActiveTool("code")}
                className="w-full py-2 text-xs font-semibold rounded-md bg-slate-800 text-slate-100 hover:bg-slate-700"
              >
                💻 Open Code Editor
              </button>
              {activeTool && (
                <button
                  onClick={() => setActiveTool(null)}
                  className="w-full py-2 text-xs font-semibold rounded-md bg-slate-700 text-slate-100 hover:bg-slate-600"
                >
                  ❌ Close Tool
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Payment card */}
        <div className="mt-4 bg-slate-900 border border-slate-700 rounded-lg px-6 py-5 max-w-xl mx-auto text-center space-y-3">
          <div className="mx-auto w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <span className="text-lg">✔</span>
          </div>
          <h2 className="text-sm font-semibold text-slate-100">Payment Released!</h2>
          <p className="text-[11px] text-slate-400">
            The class session has ended successfully. The session payment has been released to the mentor.
          </p>
          <div className="grid grid-cols-2 gap-3 text-left text-[11px] mt-2">
            <InfoRow label="Mentor" value="Najibur Rahman" />
            <InfoRow label="Amount" value="30 Credits" />
            <InfoRow label="Session Duration" value="90 minutes" />
            <InfoRow label="Status" value="Payment Completed" status />
          </div>
          <button className="mt-3 inline-flex items-center justify-center px-4 py-2 rounded-md bg-emerald-500 text-xs font-semibold text-slate-900 hover:bg-emerald-400">
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

function IconButton({ Icon, label }) {
  return (
    <button className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700">
      <Icon className="w-5 h-5 text-slate-200" />
      <span className="sr-only">{label}</span>
    </button>
  );
}

function InfoRow({ label, value, status }) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] text-slate-500">{label}</p>
      <p className={`text-xs ${status ? "text-emerald-400 font-semibold" : "text-slate-200"}`}>
        {value}
      </p>
    </div>
  );
}

/* ---------------- Whiteboard ---------------- */
function SimpleWhiteboard({ onClose }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const ctx = canvas.getContext("2d");
      ctx.lineCap = "round";
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#ffffff";
      ctx.lineJoin = "round";
    }
  }, []);

  const getMousePos = (canvas, evt) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  };

  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pos = getMousePos(canvas, e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pos = getMousePos(canvas, e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearBoard = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="w-full h-full flex flex-col bg-slate-900">
      <div className="p-3 bg-slate-900/95 border-b border-slate-700 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-100">Whiteboard</h3>
        <div className="flex gap-2">
          <button
            onClick={clearBoard}
            className="px-3 py-1 text-xs bg-red-600 hover:bg-red-500 rounded font-semibold text-white"
          >
            Clear
          </button>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded flex items-center justify-center text-slate-200"
          >
            ×
          </button>
        </div>
      </div>
      <div className="flex-1 relative">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-crosshair"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
        />
      </div>
    </div>
  );
}

/* ----------------  Code Editor  ---------------- */
function SimpleCodeEditor({ onClose }) {
  const [code, setCode] = useState(`// Compound Components Pattern Example

const Select = ({ children }) => (
  <div className="relative">
    <select className="p-2 border rounded bg-white">
      {children}
    </select>
  </div>
);

const Option = ({ children, ...props }) => (
  <option {...props}>{children}</option>
);

// Usage example for the chat question above 👆`);

  return (
    <div className="w-full h-full flex flex-col bg-slate-900">
      <div className="p-3 bg-slate-900/95 border-b border-slate-700 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-100">Code Editor</h3>
        <button
          onClick={onClose}
          className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded flex items-center justify-center text-slate-200"
          title="Close Editor"
        >
          ×
        </button>
      </div>
      <div className="flex-1 overflow-hidden">
        <Editor
          height="100%"
          language="javascript"
          value={code}
          onChange={setCode}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 13,
            readOnly: false,
          }}
        />
      </div>
    </div>
  );
}
