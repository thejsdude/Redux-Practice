Notes:

1. জাভাস্ক্রিপ্টে কোন কিছু চেঞ্জ হবে না বা স্ট্যাটিক থাকবে এমন কিছুর নাম বড় হাতের হবে(Capitalized)। আর এইগুলাকে রিডাক্সে বলে একশন আইডেন্টি ফায়ার।

2. আর কোন payload স্ট্যাটিক না পাঠিয়ে ডাইনামিক ভাবে পাঠাতে চাইলে আলাদা করে action creator তৈরি করে নিতে হবে। মানে কম্পোনেন্ট এর একদম উপরে একটি ফাংশন ডিক্লার করে সেখান থেকে অবজেক্ট আকারে রিটার্ন করতে হবে। উদাহরণঃ script.js এর ১০-২২ লাইনে দেখানো হয়েছে। আর শেষে বাটনের ইভেন্ট লিসেনার এ store.dispatch() এর প্যারামিটার হিসেবে পাঠিয়ে দিতে হবে।

3. Reducer function এ action.payload নামে payload কে এক্সেস করা যায়। আর এই পে লোড পাঠানো হয় মূলত state এর সাথে কোন প্রকার ক্যালকুলেশন বা ইন্টারএক্ট করতে
