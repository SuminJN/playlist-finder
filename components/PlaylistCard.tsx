import { Playlist } from "@/types/youtube";
import { getPlaylistUrl } from "@/lib/youtube";
import Image from "next/image";

interface PlaylistCardProps {
  playlist: Playlist;
}

export default function PlaylistCard({ playlist }: PlaylistCardProps) {
  const playlistUrl = getPlaylistUrl(playlist.id);

  return (
    <a
      href={playlistUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* 썸네일 */}
      <div className="relative aspect-video overflow-hidden bg-gray-200">
        <Image
          src={playlist.thumbnailUrl}
          alt={playlist.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          unoptimized={playlist.thumbnailUrl.includes("i.ytimg.com")}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>

      {/* 정보 */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 line-clamp-2 mb-2 group-hover:text-purple-600 transition-colors">
          {playlist.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
          {playlist.description || "설명이 없습니다."}
        </p>
        <p className="text-xs text-gray-500">{playlist.channelTitle}</p>
      </div>

      {/* 재생 아이콘 오버레이 */}
      <div className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
      </div>
    </a>
  );
}
