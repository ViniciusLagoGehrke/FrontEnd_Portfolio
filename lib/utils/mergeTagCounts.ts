import { TagCount } from '@/lib/utils/contentlayer';

export default function mergeTagCounts(
  tagCount1: TagCount,
  tagCount2: TagCount
): TagCount {
  const mergedTagCount: TagCount = { ...tagCount1 };

  for (const key in tagCount2) {
    if (key in mergedTagCount) {
      mergedTagCount[key] += tagCount2[key];
    } else {
      mergedTagCount[key] = tagCount2[key];
    }
  }

  return mergedTagCount;
}
