import { useParams } from '@tanstack/react-router'

export const Lesson: React.FC = () => {
  const params = useParams({ from: '/lesson/$id' })
  
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">レッスン {params.id}</h1>
      <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-600">動画 ID: {params.id} のコンテンツ</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">動画の説明</h2>
        <p>これは動画 ID: {params.id} の説明文です。実際のコンテンツに応じて、この部分にはレッスンの詳細情報が表示されます。</p>
      </div>
    </div>
  )
} 
