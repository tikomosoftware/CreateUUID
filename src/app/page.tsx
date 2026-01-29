"use client";

import { useState } from "react";
import { Copy, Check, RefreshCw } from "lucide-react";

export default function Home() {
    const [uuids, setUuids] = useState<string[]>([]);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const generateUuids = () => {
        const newUuids = Array.from({ length: 5 }, () => crypto.randomUUID());
        setUuids(newUuids);
    };

    const copyToClipboard = (uuid: string) => {
        navigator.clipboard.writeText(uuid);
        setCopiedId(uuid);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <main>
            <h1>UUID生成ツール</h1>
            <p className="subtitle">UUIDを生成します</p>

            <div className="card">
                <div className="button-container">
                    <button onClick={generateUuids} className="generate-btn">
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <RefreshCw size={20} />
                            UUIDを5つ生成する
                        </span>
                    </button>
                </div>

                {uuids.length > 0 && (
                    <ul className="uuid-list">
                        {uuids.map((uuid, index) => (
                            <li key={index} className="uuid-item">
                                <span>{uuid}</span>
                                <button
                                    className="copy-button"
                                    onClick={() => copyToClipboard(uuid)}
                                    title="コピー"
                                >
                                    {copiedId === uuid ? <Check size={18} color="#10b981" /> : <Copy size={18} />}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <footer>
                &copy; {new Date().getFullYear()} tiikomo software. Developed for professionals.
            </footer>
        </main>
    );
}
