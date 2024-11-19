"use client";

import React, { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

const teamMembers = [
  { title: "Project Manager", rate: 80 },
  { title: "Mobile Developer", rate: 70 },
  { title: "FullStack Developer", rate: 65 },
  { title: "Figma Designer", rate: 50 },
  { title: "Embedded Engineer", rate: 90 },
];
const projectData = {
  projectTypes: [
    {
      id: 1,
      type: "Mobile Application Development",
      questions: [
        {
          id: 101,
          question: "What platforms should the mobile app support?",
          multiSelect: true,
          options: [
            { id: 1011, answer: "Android", weight: 5 },
            { id: 1012, answer: "iOS", weight: 5 },
            { id: 1013, answer: "Both", weight: 10 },
          ],
          followUpQuestions: [
            {
              id: 1014,
              question: "What design quality do you require?",
              multiSelect: false,
              options: [
                { id: 10141, answer: "Simple", weight: 3 },
                { id: 10142, answer: "Medium", weight: 6 },
                { id: 10143, answer: "Luxury", weight: 10 },
              ],
            },
            {
              id: 1015,
              question: "How many screens/pages are required?",
              multiSelect: false,
              options: [
                { id: 10151, answer: "1-5", weight: 3 },
                { id: 10152, answer: "6-10", weight: 6 },
                { id: 10153, answer: "More than 10", weight: 10 },
              ],
            },
          ],
        },
        {
          id: 102,
          question: "What functionalities should the app include?",
          multiSelect: true,
          options: [
            { id: 1021, answer: "Authentication/Authorization", weight: 5 },
            { id: 1022, answer: "Admin Dashboard", weight: 8 },
            { id: 1023, answer: "CMS", weight: 6 },
            { id: 1024, answer: "Ability to Add/Delete Users", weight: 4 },
          ],
        },
      ],
    },
    {
      id: 2,
      type: "Web Application Development",
      questions: [
        {
          id: 201,
          question: "Should the website be responsive?",
          multiSelect: false,
          options: [
            { id: 2011, answer: "Yes", weight: 6 },
            { id: 2012, answer: "No", weight: 2 },
          ],
          followUpQuestions: [
            {
              id: 2013,
              question: "Which screen sizes should it support?",
              multiSelect: true,
              options: [
                { id: 20131, answer: "Mobile", weight: 3 },
                { id: 20132, answer: "Tablet", weight: 3 },
                { id: 20133, answer: "Desktop", weight: 4 },
                { id: 20134, answer: "All", weight: 10 },
              ],
            },
          ],
        },
        {
          id: 202,
          question: "What design quality do you require?",
          multiSelect: false,
          options: [
            { id: 2021, answer: "Simple", weight: 3 },
            { id: 2022, answer: "Medium", weight: 6 },
            { id: 2023, answer: "Luxury", weight: 10 },
          ],
        },
      ],
    },
    {
      id: 3,
      type: "IoT and Hardware Design",
      questions: [
        {
          id: 301,
          question: "What is the hardware complexity?",
          multiSelect: false,
          options: [
            { id: 3011, answer: "Simple Integration", weight: 5 },
            { id: 3012, answer: "Custom Hardware", weight: 10 },
            {
              id: 3013,
              answer: "High Complexity (e.g., Robotics)",
              weight: 15,
            },
          ],
        },
        {
          id: 302,
          question: "Does it require internet connectivity?",
          multiSelect: false,
          options: [
            { id: 3021, answer: "Yes", weight: 6 },
            { id: 3022, answer: "No", weight: 2 },
          ],
          followUpQuestions: [
            {
              id: 3023,
              question: "What protocols should it support?",
              multiSelect: true,
              options: [
                { id: 30231, answer: "WiFi", weight: 3 },
                { id: 30232, answer: "Bluetooth", weight: 3 },
                { id: 30233, answer: "Zigbee", weight: 4 },
                { id: 30234, answer: "All of the Above", weight: 10 },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function useProjectEstimator() {
  const [selectedProjectType, setSelectedProjectType] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleProjectTypeSelect = (id) => {
    const projectType = projectData.projectTypes.find((p) => p.id === id);
    setSelectedProjectType(projectType);
    setSelectedAnswers([]);
  };

  const handleAnswerSelect = (questionId, optionId, multiSelect) => {
    setSelectedAnswers((prev) => {
      if (multiSelect) {
        const existing = prev.filter((ans) => ans.questionId !== questionId);
        const isSelected = prev.some(
          (ans) => ans.questionId === questionId && ans.optionId === optionId,
        );
        return isSelected ? existing : [...existing, { questionId, optionId }];
      } else {
        return prev
          .filter((ans) => ans.questionId !== questionId)
          .concat({ questionId, optionId });
      }
    });
  };

  const estimation = useMemo(() => {
    if (!selectedProjectType)
      return { totalWeight: 0, hoursRequired: 0, totalCost: 0 };

    const totalWeight = selectedAnswers.reduce((sum, answer) => {
      const question = selectedProjectType.questions.find(
        (q) => q.id === answer.questionId,
      );
      const option = question?.options.find(
        (opt) => opt.id === answer.optionId,
      );
      return sum + (option?.weight || 0);
    }, 0);

    const hoursRequired = totalWeight * 10;
    const totalCost = teamMembers.reduce(
      (sum, member) => sum + member.rate * hoursRequired,
      0,
    );

    return { totalWeight, hoursRequired, totalCost };
  }, [selectedProjectType, selectedAnswers]);

  return {
    selectedProjectType,
    selectedAnswers,
    handleProjectTypeSelect,
    handleAnswerSelect,
    estimation,
  };
}

function Questions({ questions, selectedAnswers, handleAnswerSelect }) {
  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-6">
        {questions.map((question) => (
          <div key={question.id} className="space-y-2">
            <h4 className="font-medium">{question.question}</h4>
            {question.multiSelect ? (
              question.options.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`question-${question.id}-option-${option.id}`}
                    checked={selectedAnswers.some(
                      (ans) =>
                        ans.questionId === question.id &&
                        ans.optionId === option.id,
                    )}
                    onCheckedChange={() =>
                      handleAnswerSelect(question.id, option.id, true)
                    }
                  />
                  <Label
                    htmlFor={`question-${question.id}-option-${option.id}`}
                  >
                    {option.answer}
                  </Label>
                </div>
              ))
            ) : (
              <RadioGroup
                onValueChange={(value) =>
                  handleAnswerSelect(question.id, parseInt(value), false)
                }
                value={
                  selectedAnswers
                    .find((ans) => ans.questionId === question.id)
                    ?.optionId.toString() || ""
                }
              >
                {question.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={option.id.toString()}
                      id={`question-${question.id}-option-${option.id}`}
                    />
                    <Label
                      htmlFor={`question-${question.id}-option-${option.id}`}
                    >
                      {option.answer}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

function EstimationSummary({ estimation }) {
  return (
    <div className="w-full">
      <h3 className="mb-2 text-lg font-medium">Estimation</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-primary/10 p-4">
          <p className="text-primary-foreground/70 text-sm">Total Weight</p>
          <p className="text-primary-foreground text-2xl font-bold">
            {estimation.totalWeight}
          </p>
        </div>
        <div className="rounded-lg bg-primary/10 p-4">
          <p className="text-primary-foreground/70 text-sm">Hours Required</p>
          <p className="text-primary-foreground text-2xl font-bold">
            {estimation.hoursRequired}
          </p>
        </div>
        <div className="rounded-lg bg-primary/10 p-4">
          <p className="text-primary-foreground/70 text-sm">Total Cost</p>
          <p className="text-primary-foreground text-2xl font-bold">
            ${estimation.totalCost.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProjectEstimator() {
  const {
    selectedProjectType,
    selectedAnswers,
    handleProjectTypeSelect,
    handleAnswerSelect,
    estimation,
  } = useProjectEstimator();

  return (
    <div className="container mx-auto p-4">
      <Card className="mx-auto w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Project Estimator</CardTitle>
          <CardDescription>
            Select your project type and answer the questions to get an
            estimate.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-medium">Select Project Type</h3>
              <div className="flex flex-wrap gap-2">
                {projectData.projectTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant={
                      selectedProjectType?.id === type.id
                        ? "default"
                        : "outline"
                    }
                    onClick={() => handleProjectTypeSelect(type.id)}
                  >
                    {type.type}
                  </Button>
                ))}
              </div>
            </div>

            {selectedProjectType && (
              <Questions
                questions={selectedProjectType.questions}
                selectedAnswers={selectedAnswers}
                handleAnswerSelect={handleAnswerSelect}
              />
            )}
          </div>
        </CardContent>
        <CardFooter>
          {selectedAnswers.length > 0 && (
            <EstimationSummary estimation={estimation} />
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
