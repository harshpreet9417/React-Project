import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RandomProject() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <MotionConfig reducedMotion="user">
        <Card className="w-full max-w-md p-6 rounded-2xl shadow-xl bg-white">
          <CardContent className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-center">✨ Tiny Counter App ✨</h1>
            <p className="text-center text-gray-600 text-base">
              A super simple React project that counts how many times you poke the button.
            </p>

            <motion.div
              key={count}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-5xl font-bold text-center"
            >
              {count}
            </motion.div>

            <Button
              className="rounded-2xl p-4 text-lg shadow-md"
              onClick={() => setCount(count + 1)}
            >
              Tap Me
            </Button>
          </CardContent>
        </Card>
      </MotionConfig>
    </div>
  );
}