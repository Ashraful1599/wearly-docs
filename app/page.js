'use client'

import { getContentForSection } from './lib/content';
import DocumentationLayout from './components/DocumentationLayout';

export default function HomePage() {
  const content = getContentForSection('home');

  return (
    <DocumentationLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <div
            className="prose prose-gray dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </article>
      </div>
    </DocumentationLayout>
  );
}