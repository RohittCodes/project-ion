# ProjectIon

Project-Ion is a place to explore projects and collaborate on problem statements.

## Backend and ExplainThatStuff

To have a look at the backend code of Project-Ion, you can head over to the [Project-Ion Backend](https://github.com/UdaykiranRegimudi/Backend-) repository (Private initially, as it is in development stage). It is maintained by [Me](https://github.com/RohittCodes), [@Uday Regimudi](https://www.github.com/username), and the team.

[ExplainThatStuff](https://github.com/RohittCodes/ExplainThatStuff) is an AI integrated code explanation tool powered by GeminiAI.

## Algorithm to find similarity between two documents:

To calculate the percentage of copied content or similarity between two documents based on the Document-Term Matrix (DTM), we're using a similarity measure such as Cosine Similarity. Cosine Similarity measures the cosine of the angle between two vectors, and in the context of document similarity, these vectors represent the document representations in the vector space of terms.

Here's a high-level overview of the process:

1. **Cosine Similarity Calculation:**

   - We calculate the cosine similarity between the vectors representing the two documents. The formula for cosine similarity between two vectors \(A\) and \(B\) is given by:

     \[ \text{Cosine Similarity}(A, B) = \frac{A \cdot B}{\|A\| \cdot \|B\|} \]

     where \(A \cdot B\) is the dot product of the vectors \(A\) and \(B\), and \(\|A\|\) and \(\|B\|\) are the magnitudes (Euclidean norms) of the vectors.

2. **Similarity Score:**

   - The result of the cosine similarity calculation is a value between -1 and 1. A value of 1 indicates perfect similarity, 0 indicates no similarity, and -1 indicates perfect dissimilarity.
   - We're then converting the similarity score to a percentage by scaling it to the range [0, 100]. For example, if \( \text{Cosine Similarity}(A, B) = 0.8 \), we consider it as an 80% similarity.

3. **Threshold Comparison:**

   - Compare the calculated similarity percentage with your predefined threshold. In our case, suppose we've a threshold of 25%. If the similarity percentage is less than 25%, you may accept the solution; otherwise, you might reject it as a potential case of plagiarism.

Here's a simplified example in Python using scikit-learn, which we've implemented using JavaScript:

```python
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer

# Example documents
document1 = "This is the first document."
document2 = "This document is the second document."

# Tokenize and create Document-Term Matrix
vectorizer = CountVectorizer()
dtm = vectorizer.fit_transform([document1, document2])

# Calculate Cosine Similarity
cosine_sim = cosine_similarity(dtm)

# Convert to percentage
similarity_percentage = cosine_sim[0, 1] * 100

# Compare with threshold
threshold = 25
if similarity_percentage < threshold:
    print(f"Accept: Similarity = {similarity_percentage:.2f}%")
else:
    print(f"Reject: Similarity = {similarity_percentage:.2f}%")
```
