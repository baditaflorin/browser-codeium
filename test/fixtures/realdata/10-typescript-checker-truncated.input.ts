import {
    __String,
    AccessExpression,
    AccessFlags,
    AccessorDeclaration,
    addRange,
    addRelatedInfo,
    addSyntheticLeadingComment,
    addSyntheticTrailingComment,
    AliasDeclarationNode,
    AllAccessorDeclarations,
    AmbientModuleDeclaration,
    and,
    AnonymousType,
    AnyImportOrJsDocImport,
    AnyImportOrReExport,
    append,
    appendIfUnique,
    ArrayBindingPattern,
    arrayFrom,
    arrayIsEqualTo,
    arrayIsHomogeneous,
    ArrayLiteralExpression,
    arrayOf,
    arrayToMultiMap,
    ArrayTypeNode,
    ArrowFunction,
    AsExpression,
    AssertionExpression,
    AssignmentDeclarationKind,
    AssignmentKind,
    AssignmentPattern,
    AwaitExpression,
    BaseType,
    BigIntLiteral,
    BigIntLiteralType,
    BinaryExpression,
    BinaryOperator,
    BinaryOperatorToken,
    binarySearch,
    BindableObjectDefinePropertyCall,
    BindableStaticNameExpression,
    BindingElement,
    BindingElementGrandparent,
    BindingName,
    BindingPattern,
    bindSourceFile,
    Block,
    BooleanLiteral,
    BreakOrContinueStatement,
    CallChain,
    CallExpression,
    CallLikeExpression,
    CallSignatureDeclaration,
    CancellationToken,
    canHaveDecorators,
    canHaveExportModifier,
    canHaveFlowNode,
    canHaveIllegalDecorators,
    canHaveIllegalModifiers,
    canHaveJSDoc,
    canHaveLocals,
    canHaveModifiers,
    canHaveModuleSpecifier,
    canHaveStatements,
    canHaveSymbol,
    canIncludeBindAndCheckDiagnostics,
    canUsePropertyAccess,
    cartesianProduct,
    CaseBlock,
    CaseClause,
    CaseOrDefaultClause,
    cast,
    chainDiagnosticMessages,
    CharacterCodes,
    CheckFlags,
    ClassDeclaration,
    ClassElement,
    classElementOrClassElementParameterIsDecorated,
    ClassExpression,
    ClassLikeDeclaration,
    classOrConstructorParameterIsDecorated,
    ClassStaticBlockDeclaration,
    clear,
    compareComparableValues,
    compareDiagnostics,
    comparePaths,
    compareValues,
    Comparison,
    CompilerOptions,
    ComputedPropertyName,
    concatenate,
    concatenateDiagnosticMessageChains,
    ConditionalExpression,
    ConditionalRoot,
    ConditionalType,
    ConditionalTypeNode,
    ConstructorDeclaration,
    ConstructorTypeNode,
    ConstructSignatureDeclaration,
    contains,
    containsParseError,
    ContextFlags,
    copyEntries,
    countWhere,
    createBinaryExpressionTrampoline,
    createCompilerDiagnostic,
    createDetachedDiagnostic,
    createDiagnosticCollection,
    createDiagnosticForFileFromMessageChain,
    createDiagnosticForNode,
    createDiagnosticForNodeArray,
    createDiagnosticForNodeArrayFromMessageChain,
    createDiagnosticForNodeFromMessageChain,
    createDiagnosticMessageChainFromDiagnostic,
    createEmptyExports,
    createEvaluator,
    createFileDiagnostic,
    createFlowNode,
    createGetSymbolWalker,
    createModeAwareCacheKey,
    createModeMismatchDetails,
    createModuleNotFoundChain,
    createMultiMap,
    createNameResolver,
    createPrinterWithDefaults,
    createPrinterWithRemoveComments,
    createPrinterWithRemoveCommentsNeverAsciiEscape,
    createPrinterWithRemoveCommentsOmitTrailingSemicolon,
    createPropertyNameNodeForIdentifierOrLiteral,
    createScanner,
    createSymbolTable,
    createSyntacticTypeNodeBuilder,
    createTextWriter,
    Debug,
    Declaration,
    DeclarationName,
    declarationNameToString,
    DeclarationStatement,
    DeclarationWithTypeParameterChildren,
    DeclarationWithTypeParameters,
    Decorator,
    deduplicate,
    DefaultClause,
    defaultMaximumTruncationLength,
    DeferredTypeReference,
    DeleteExpression,
    Diagnostic,
    DiagnosticAndArguments,
    DiagnosticArguments,
    DiagnosticCategory,
    DiagnosticMessage,
    DiagnosticMessageChain,
    DiagnosticRelatedInformation,
    Diagnostics,
    DiagnosticWithLocation,
    DoStatement,
    DynamicNamedDeclaration,
    ElementAccessChain,
    ElementAccessExpression,
    ElementFlags,
    ElementWithComputedPropertyName,
    EmitFlags,
    EmitHint,
    emitModuleKindIsNonNodeESM,
    EmitResolver,
    EmitTextWriter,
    emptyArray,
    EntityName,
    EntityNameExpression,
    EntityNameOrEntityNameExpression,
    entityNameToString,
    EnumDeclaration,
    EnumMember,
    EnumType,
    equateValues,
    ErrorOutputContainer,
    escapeLeadingUnderscores,
    escapeString,
    EvaluatorResult,
    evaluatorResult,
    every,
    EvolvingArrayType,
    ExclamationToken,
    ExportAssignment,
    exportAssignmentIsAlias,
    ExportDeclaration,
    ExportSpecifier,
    Expression,
    expressionResultIsUnused,
    ExpressionStatement,
    ExpressionWithTypeArguments,
    Extension,
    ExternalEmitHelpers,
    externalHelpersModuleNameText,
    factory,
    fileExtensionIs,
    fileExtensionIsOneOf,
    filter,
    find,
    findAncestor,
    findBestPatternMatch,
    findConstructorDeclaration,
    findIndex,
    findLast,
    findLastIndex,
    findUseStrictPrologue,
    first,
    firstDefined,
    firstIterator,
    firstOrUndefined,
    firstOrUndefinedIterator,
    flatMap,
    flatten,
    FlowArrayMutation,
    FlowAssignment,
    FlowCall,
    FlowCondition,
    FlowFlags,
    FlowLabel,
    FlowNode,
    FlowReduceLabel,
    FlowStart,
    FlowSwitchClause,
    FlowSwitchClauseData,
    FlowType,
    forEach,
    forEachChild,
    forEachChildRecursively,
    forEachEnclosingBlockScopeContainer,
    forEachEntry,
    forEachKey,
    forEachReturnStatement,
    forEachYieldExpression,
    ForInOrOfStatement,
    ForInStatement,
    formatMessage,
    ForOfStatement,
    ForStatement,
    FreshableIntrinsicType,
    FreshableType,
    FreshObjectLiteralType,
    FunctionDeclaration,
    FunctionExpression,
    FunctionFlags,
    FunctionLikeDeclaration,
    FunctionOrConstructorTypeNode,
    FunctionTypeNode,
    GenericType,
    GetAccessorDeclaration,
    getAliasDeclarationFromName,
    getAllJSDocTags,
    getAllowSyntheticDefaultImports,
    getAncestor,
    getAnyExtensionFromPath,
    getAssignedExpandoInitializer,
    getAssignmentDeclarationKind,
    getAssignmentDeclarationPropertyAccessKind,
    getAssignmentTargetKind,
    getCanonicalDiagnostic,
    getCheckFlags,
    getClassExtendsHeritageElement,
    getClassLikeDeclarationOfSymbol,
    getCombinedLocalAndExportSymbolFlags,
    getCombinedModifierFlags,
    getCombinedNodeFlags,
    getCommonSourceDirectoryOfConfig,
    getContainingClass,
    getContainingClassExcludingClassDecorators,
    getContainingClassStaticBlock,
    getContainingFunction,
    getContainingFunctionOrClassStaticBlock,
    getDeclarationFileExtension,
    getDeclarationModifierFlagsFromSymbol,
    getDeclarationOfKind,
    getDeclarationsOfKind,
    getDeclaredExpandoInitializer,
    getDecorators,
    getDirectoryPath,
    getEffectiveBaseTypeNode,
    getEffectiveConstraintOfTypeParameter,
    getEffectiveContainerForJSDocTemplateTag,
    getEffectiveImplementsTypeNodes,
    getEffectiveInitializer,
    getEffectiveJSDocHost,
    getEffectiveModifierFlags,
    getEffectiveReturnTypeNode,
    getEffectiveSetAccessorTypeAnnotationNode,
    getEffectiveTypeAnnotationNode,
    getEffectiveTypeParameterDeclarations,
    getElementOrPropertyAccessName,
    getEmitDeclarations,
    getEmitModuleKind,
    getEmitModuleResolutionKind,
    getEmitScriptTarget,
    getEmitStandardClassFields,
    getEnclosingBlockScopeContainer,
    getEnclosingContainer,
    getEntityNameFromTypeNode,
    getErrorSpanForNode,
    getEscapedTextOfIdentifierOrLiteral,
    getEscapedTextOfJsxAttributeName,
    getEscapedTextOfJsxNamespacedName,
    getESModuleInterop,
    getExpandoInitializer,
    getExportAssignmentExpression,
    getExternalModuleImportEqualsDeclarationExpression,
    getExternalModuleName,
    getExternalModuleRequireArgument,
    getFirstConstructorWithBody,
    getFirstIdentifier,
    getFunctionFlags,
    getHostSignatureFromJSDoc,
    getIdentifierGeneratedImportReference,
    getIdentifierTypeArguments,
    getImmediatelyInvokedFunctionExpression,
    getInitializerOfBinaryExpression,
    getInterfaceBaseTypeNodes,
    getInvokedExpression,
    getIsolatedModules,
    getJSDocClassTag,
    getJSDocDeprecatedTag,
    getJSDocEnumTag,
    getJSDocHost,
    getJSDocOverloadTags,
    getJSDocParameterTags,
    getJSDocRoot,
    getJSDocSatisfiesExpressionType,
    getJSDocTags,
    getJSDocThisTag,
    getJSDocType,
    getJSDocTypeAssertionType,
    getJSDocTypeParameterDeclarations,
    getJSDocTypeTag,
    getJSXImplicitImportBase,
    getJSXRuntimeImport,
    getJSXTransformEnabled,
    getLeftmostAccessExpression,
    getLineAndCharacterOfPosition,
    getMembersOfDeclaration,
    getModifiers,
    getModuleInstanceState,
    getModuleSpecifierOfBareOrAccessedRequire,
    getNameFromImportAttribute,
    getNameFromIndexInfo,
    getNameOfDeclaration,
    getNameOfExpando,
    getNamespaceDeclarationNode,
    getNewTargetContainer,
    getNonAugmentationDeclaration,
    getNormalizedAbsolutePath,
    getObjectFlags,
    getOriginalNode,
    getOrUpdate,
    getParameterSymbolFromJSDoc,
    getParseTreeNode,
    getPropertyAssignmentAliasLikeExpression,
    getPropertyNameForPropertyNameNode,
    getPropertyNameFromType,
    getRelativePathFromDirectory,
    getRelativePathFromFile,
    getResolutionDiagnostic,
    getResolutionModeOverride,
    getResolveJsonModule,
    getRestParameterElementType,
    getRootDeclaration,
    getScriptTargetFeatures,
    getSelectedEffectiveModifierFlags,
    getSemanticJsxChildren,
    getSetAccessorValueParameter,
    getSingleVariableOfVariableStatement,
    getSourceFileOfModule,
    getSourceFileOfNode,
    getSpanOfTokenAtPosition,
    getSpellingSuggestion,
    getStrictOptionValue,
    getSuperContainer,
    getSymbolNameForPrivateIdentifier,
    getSynthesizedDeepClone,
    getTextOfIdentifierOrLiteral,
    getTextOfJSDocComment,
    getTextOfJsxAttributeName,
    getTextOfNode,
    getTextOfPropertyName,
    getThisContainer,
    getThisParameter,
    getTokenPosOfNode,
    getTrailingSemicolonDeferringWriter,
    getTypeParameterFromJsDoc,
    getUseDefineForClassFields,
    group,
    hasAbstractModifier,
    hasAccessorModifier,
    hasAmbientModifier,
    hasContextSensitiveParameters,
    HasDecorators,
    hasDecorators,
    hasDynamicName,
    hasEffectiveModifier,
    hasEffectiveModifiers,
    hasEffectiveReadonlyModifier,
    HasExpressionInitializer,
    hasExtension,
    HasIllegalDecorators,
    HasIllegalModifiers,
    HasInferredType,
    hasInferredType,
    HasInitializer,
    hasInitializer,
    hasJSDocNodes,
    hasJSDocParameterTags,
    hasJsonModuleEmitEnabled,
    HasLocals,
    HasModifiers,
    hasOnlyExpressionInitializer,
    hasOverrideModifier,
    hasPossibleExternalModuleReference,
    hasQuestionToken,
    hasResolutionModeOverride,
    hasRestParameter,
    hasScopeMarker,
    hasStaticModifier,
    hasSyntacticModifier,
    hasSyntacticModifiers,
    hasType,
    hasTypeArguments,
    HeritageClause,
    hostGetCanonicalFileName,
    Identifier,
    identifierToKeywordKind,
    IdentifierTypePredicate,
    identity,
    idText,
    IfStatement,
    ImportAttribute,
    ImportAttributes,
    ImportCall,
    ImportClause,
    ImportDeclaration,
    ImportEqualsDeclaration,
    ImportOrExportSpecifier,
    ImportSpecifier,
    ImportTypeNode,
    IndexedAccessType,
    IndexedAccessTypeNode,
    IndexFlags,
    IndexInfo,
    IndexKind,
    indexOfNode,
    IndexSignatureDeclaration,
    IndexType,
    indicesOf,
    InferenceContext,
    InferenceFlags,
    InferenceInfo,
    InferencePriority,
    InferTypeNode,
    InstanceofExpression,
    InstantiableType,
    InstantiationExpressionType,
    InterfaceDeclaration,
    InterfaceType,
    InterfaceTypeWithDeclaredMembers,
    InternalNodeBuilderFlags,
    InternalSymbolName,
    IntersectionFlags,
    IntersectionType,
    IntersectionTypeNode,
    intrinsicTagNameToString,
    IntrinsicType,
    introducesArgumentsExoticObject,
    IntroducesNewScopeNode,
    isAccessExpression,
    isAccessor,
    isAccessorModifier,
    isAliasableExpression,
    isAmbientModule,
    isArray,
    isArrayBindingPattern,
    isArrayLiteralExpression,
    isArrowFunction,
    isAssertionExpression,
    isAssignmentDeclaration,
    isAssignmentExpression,
    isAssignmentOperator,
    isAssignmentPattern,
    isAssignmentTarget,
    isAutoAccessorPropertyDeclaration,
    isAwaitExpression,
    isBigIntLiteral,
    isBinaryExpression,
    isBinaryLogicalOperator,
    isBindableObjectDefinePropertyCall,
    isBindableStaticElementAccessExpression,
    isBindableStaticNameExpression,
    isBindingElement,
    isBindingElementOfBareOrAccessedRequire,
    isBindingPattern,
    isBlock,
    isBlockOrCatchScoped,
    isBlockScopedContainerTopLevel,
    isBooleanLiteral,
    isCallChain,
    isCallExpression,
    isCallLikeExpression,
    isCallLikeOrFunctionLikeExpression,
    isCallOrNewExpression,
    isCallSignatureDeclaration,
    isCaseOrDefaultClause,
    isCatchClause,
    isCatchClauseVariableDeclaration,
    isCatchClauseVariableDeclarationOrBindingElement,
    isCheckJsEnabledForFile,
    isClassDeclaration,
    isClassElement,
    isClassExpression,
    isClassInstanceProperty,
    isClassLike,
    isClassStaticBlockDeclaration,
    isCommaSequence,
    isCommonJsExportedExpression,
    isCommonJsExportPropertyAssignment,
    isCompoundAssignment,
    isComputedNonLiteralName,
    isComputedPropertyName,
    isConditionalExpression,
    isConditionalTypeNode,
    isConstAssertion,
    isConstructorDeclaration,
    isConstructorTypeNode,
    isConstructSignatureDeclaration,
    isConstTypeReference,
    isDeclaration,
    isDeclarationFileName,
    isDeclarationName,
    isDeclarationReadonly,
    isDecorator,
    isDefaultedExpandoInitializer,
    isDeleteTarget,
    isDottedName,
    isDynamicName,
    isEffectiveExternalModule,
    isElementAccessExpression,
    isEntityName,
    isEntityNameExpression,
    isEnumConst,
    isEnumDeclaration,
    isEnumMember,
    isExclusivelyTypeOnlyImportOrExport,
    isExpandoPropertyDeclaration,
    isExportAssignment,
    isExportDeclaration,
    isExportsIdentifier,
    isExportSpecifier,
    isExpression,
    isExpressionNode,
    isExpressionOfOptionalChainRoot,
    isExpressionStatement,
    isExpressionWithTypeArguments,
    isExpressionWithTypeArgumentsInClassExtendsClause,
    isExternalModule,
    isExternalModuleAugmentation,
    isExternalModuleImportEqualsDeclaration,
    isExternalModuleIndicator,
    isExternalModuleNameRelative,
    isExternalModuleReference,
    isExternalModuleSymbol,
    isExternalOrCommonJsModule,
    isForInOrOfStatement,
    isForInStatement,
    isForOfStatement,
    isForStatement,
    isFunctionDeclaration,
    isFunctionExpression,
    isFunctionExpressionOrArrowFunction,
    isFunctionLike,
    isFunctionLikeDeclaration,
    isFunctionLikeOrClassStaticBlockDeclaration,
    isFunctionOrModuleBlock,
    isFunctionTypeNode,
    isGeneratedIdentifier,
    isGetAccessor,
    isGetAccessorDeclaration,
    isGetOrSetAccessorDeclaration,
    isGlobalScopeAugmentation,
    isGlobalSourceFile,
    isHeritageClause,
    isIdentifier,
    isIdentifierText,
    isIdentifierTypePredicate,
    isIdentifierTypeReference,
    isIfStatement,
    isImportAttributes,
    isImportCall,
    isImportClause,
    isImportDeclaration,
    isImportEqualsDeclaration,
    isImportKeyword,
    isImportOrExportSpecifier,
    isImportSpecifier,
    isImportTypeNode,
    isInCompoundLikeAssignment,
    isIndexedAccessTypeNode,
    isIndexSignatureDeclaration,
    isInExpressionContext,
    isInfinityOrNaNString,
    isInitializedProperty,
    isInJSDoc,
    isInJSFile,
    isInJsonFile,
    isInstanceOfExpression,
    isInterfaceDeclaration,
    isInternalModuleImportEqualsDeclaration,
    isInTopLevelContext,
    isIntrinsicJsxName,
    isInTypeQuery,
    isIterationStatement,
    isJSDocAugmentsTag,
    isJSDocCallbackTag,
    isJSDocConstructSignature,
    isJSDocFunctionType,
    isJSDocImportTag,
    isJSDocIndexSignature,
    isJSDocLinkLike,
    isJSDocMemberName,
    isJSDocNameReference,
    isJSDocNode,
    isJSDocNonNullableType,
    isJSDocNullableType,
    isJSDocOptionalParameter,
    isJSDocOverloadTag,
    isJSDocParameterTag,
    isJSDocPropertyLikeTag,
    isJSDocPropertyTag,
    isJSDocSatisfiesExpression,
    isJSDocSatisfiesTag,
    isJSDocSignature,
    isJSDocTemplateTag,
    isJSDocThisTag,
    isJSDocTypeAlias,
    isJSDocTypeAssertion,
    isJSDocTypedefTag,
    isJSDocTypeExpression,
    isJSDocTypeLiteral,
    isJSDocVariadicType,
    isJsonSourceFile,
    isJsxAttribute,
    isJsxAttributeLike,
    isJsxAttributes,
    isJsxCallLike,
    isJsxElement,
    isJsxFragment,
    isJsxNamespacedName,
    isJsxOpeningElement,
    isJsxOpeningFragment,
    isJsxOpeningLikeElement,
    isJsxSelfClosingElement,
    isJsxSpreadAttribute,
    isJSXTagName,
    isKnownSymbol,
    isLateVisibilityPaintedStatement,
    isLeftHandSideExpression,
    isLineBreak,
    isLiteralComputedPropertyDeclarationName,
    isLiteralExpression,
    isLiteralExpressionOfObject,
    isLiteralImportTypeNode,
    isLiteralTypeNode,
    isLogicalOrCoalescingBinaryExpression,
    isLogicalOrCoalescingBinaryOperator,
    isMetaProperty,
    isMethodDeclaration,
    isMethodSignature,
    isModifier,
    isModuleBlock,
    isModuleDeclaration,
    isModuleExportsAccessExpression,
    isModuleIdentifier,
    isModuleOrEnumDeclaration,
    isModuleWithStringLiteralName,
    isNamedDeclaration,
    isNamedEvaluationSource,
    isNamedExports,
    isNamedTupleMember,
    isNamespaceExport,
    isNamespaceExportDeclaration,
    isNamespaceReexportDeclaration,
    isNewExpression,
    isNodeDescendantOf,
    isNonNullAccess,
    isNonNullExpression,
    isNumericLiteral,
    isNumericLiteralName,
    isObjectBindingPattern,
    isObjectLiteralElementLike,
    isObjectLiteralExpression,
    isObjectLiteralMethod,
    isObjectLiteralOrClassExpressionMethodOrAccessor,
    isOmittedExpression,
    isOptionalChain,
    isOptionalChainRoot,
    isOptionalDeclaration,
    isOptionalJSDocPropertyLikeTag,
    isOptionalTypeNode,
    isOutermostOptionalChain,
    isParameter,
    isParameterPropertyDeclaration,
    isParenthesizedExpression,
    isParenthesizedTypeNode,
    isPartOfParameterDeclaration,
    isPartOfTypeNode,
    isPartOfTypeOnlyImportOrExportDeclaration,
    isPartOfTypeQuery,
    isPlainJsFile,
    isPotentiallyExecutableNode,
    isPrefixUnaryExpression,
    isPrivateIdentifier,
    isPrivateIdentifierClassElementDeclaration,
    isPrivateIdentifierPropertyAccessExpression,
    isPrivateIdentifierSymbol,
    isPropertyAccessEntityNameExpression,
    isPropertyAccessExpression,
    isPropertyAccessOrQualifiedName,
    isPropertyAccessOrQualifiedNameOrImportTypeNode,
    isPropertyAssignment,
    isPropertyDeclaration,
    isPropertyName,
    isPropertyNameLiteral,
    isPropertySignature,
    isPrototypeAccess,
    isPrototypePropertyAssignment,
    isPushOrUnshiftIdentifier,
    isQualifiedName,
    isRequireCall,
    isRestParameter,
    isRestTypeNode,
    isRightSideOfAccessExpression,
    isRightSideOfInstanceofExpression,
    isRightSideOfQualifiedNameOrPropertyAccess,
    isRightSideOfQualifiedNameOrPropertyAccessOrJSDocMemberName,
    isSameEntityName,
    isSetAccessor,
    isSetAccessorDeclaration,
    isShorthandAmbientModuleSymbol,
    isShorthandPropertyAssignment,
    isSideEffectImport,
    isSingleOrDoubleQuote,
    isSourceFile,
    isSourceFileJS,
    isSpreadAssignment,
    isSpreadElement,
    isStatement,
    isStatementWithLocals,
    isStatic,
    isString,
    isStringANonContextualKeyword,
    isStringLiteral,
    isStringLiteralLike,
    isStringOrNumericLiteralLike,
    isSuperCall,
    isSuperProperty,
    isTaggedTemplateExpression,
    isTemplateSpan,
    isThisContainerOrFunctionBlock,
    isThisIdentifier,
    isThisInitializedDeclaration,
    isThisInitializedObjectBindingExpression,
    isThisInTypeQuery,
    isThisProperty,
    isThisTypeParameter,
    isThisTypePredicate,
    isTransientSymbol,
    isTupleTypeNode,
    isTypeAlias,
    isTypeAliasDeclaration,
    isTypeDeclaration,
    isTypeLiteralNode,
    isTypeNode,
    isTypeNodeKind,
    isTypeOfExpression,
    isTypeOnlyImportDeclaration,
    isTypeOnlyImportOrExportDeclaration,
    isTypeOperatorNode,
    isTypeParameterDeclaration,
    isTypePredicateNode,
    isTypeQueryNode,
    isTypeReferenceNode,
    isTypeReferenceType,
    isTypeUsableAsPropertyName,
    isUMDExportSymbol,
    isValidBigIntString,
    isValidESSymbolDeclaration,
    isValidTypeOnlyAliasUseSite,
    isValueSignatureDeclaration,
    isVariableDeclaration,
    isVariableDeclarationInitializedToBareOrAccessedRequire,
    isVariableDeclarationInVariableStatement,
    isVariableDeclarationList,
    isVariableLike,
    isVariableStatement,
    isWriteAccess,
    isWriteOnlyAccess,
    IterableOrIteratorType,
    IterationTypes,
    JSDoc,
    JSDocAugmentsTag,
    JSDocCallbackTag,
    JSDocComment,
    JSDocFunctionType,
    JSDocImplementsTag,
    JSDocImportTag,
    JSDocLink,
    JSDocLinkCode,
    JSDocLinkPlain,
    JSDocMemberName,
    JSDocNullableType,
    JSDocOptionalType,
    JSDocOverloadTag,
    JSDocParameterTag,
    JSDocPrivateTag,
    JSDocPropertyLikeTag,
    JSDocPropertyTag,
    JSDocProtectedTag,
    JSDocPublicTag,
    JSDocSatisfiesTag,
    JSDocSignature,
    JSDocTemplateTag,
    JSDocThisTag,
    JSDocTypeAssertion,
    JSDocTypedefTag,
    JSDocTypeExpression,
    JSDocTypeLiteral,
    JSDocTypeReferencingNode,
    JSDocTypeTag,
    JSDocVariadicType,
    JsxAttribute,
    JsxAttributeLike,
    JsxAttributeName,
    JsxAttributes,
    JsxCallLike,
    JsxChild,
    JsxClosingElement,
    JsxElement,
    JsxEmit,
    JsxExpression,
    JsxFlags,
    JsxFragment,
    JsxNamespacedName,
    JsxOpeningElement,
    JsxOpeningFragment,
    JsxOpeningLikeElement,
    JsxReferenceKind,
    JsxSelfClosingElement,
    JsxSpreadAttribute,
    JsxTagNameExpression,
    KeywordTypeNode,
    LabeledStatement,
    LanguageFeatureMinimumTarget,
    last,
    lastOrUndefined,
    LateBoundBinaryExpressionDeclaration,
    LateBoundDeclaration,
    LateBoundName,
    LateVisibilityPaintedStatement,
    LazyNodeCheckFlags,
    length,
    LiteralExpression,
    LiteralType,
    LiteralTypeNode,
    map,
    mapDefined,
    MappedSymbol,
    MappedType,
    MappedTypeNode,
    MatchingKeys,
    maybeBind,
    MemberOverrideStatus,
    MetaProperty,
    MethodDeclaration,
    MethodSignature,
    minAndMax,
    MinusToken,
    Modifier,
    ModifierFlags,
    modifiersToFlags,
    modifierToFlag,
    ModuleBlock,
    ModuleDeclaration,
    ModuleExportName,
    moduleExportNameIsDefault,
    moduleExportNameTextEscaped,
    moduleExportNameTextUnescaped,
    ModuleInstanceState,
    ModuleKind,
    ModuleName,
    ModuleResolutionKind,
    ModuleSpecifierResolutionHost,
    moduleSupportsImportAttributes,
    Mutable,
    MutableNodeArray,
    NamedDeclaration,
    NamedExports,
    NamedImportsOrExports,
    NamedTupleMember,
    NamespaceDeclaration,
    NamespaceExport,
    NamespaceExportDeclaration,
    NamespaceImport,
    needsScopeMarker,
    NewExpression,
    Node,
    NodeArray,
    NodeBuilderFlags,
    nodeCanBeDecorated,
    NodeCheckFlags,
    nodeCoreModules,
    NodeFlags,
    nodeHasName,
    nodeIsMissing,
    nodeIsPresent,
    nodeIsSynthesized,
    NodeLinks,
    nodeStartsNewLexicalEnvironment,
    NodeWithTypeArguments,
    NonNullChain,
    NonNullExpression,
    NoSubstitutionTemplateLiteral,
    not,
    noTruncationMaximumTruncationLength,
    NumberLiteralType,
    NumericLiteral,
    objectAllocator,
    ObjectBindingPattern,
    ObjectFlags,
    ObjectFlagsType,
    ObjectLiteralElementLike,
    ObjectLiteralExpression,
    ObjectType,
    OptionalChain,
    OptionalTypeNode,
    or,
    orderedRemoveItemAt,
    OuterExpressionKinds,
    ParameterDeclaration,
    parameterIsThisKeyword,
    ParameterPropertyDeclaration,
    ParenthesizedExpression,
    ParenthesizedTypeNode,
    parseIsolatedEntityName,
    parseNodeFactory,
    parsePseudoBigInt,
    parseValidBigInt,
    Path,
    pathIsRelative,
    PatternAmbientModule,
    PlusToken,
    PostfixUnaryExpression,
    PredicateSemantics,
    PrefixUnaryExpression,
    PrivateIdentifier,
    Program,
    PromiseOrAwaitableType,
    PropertyAccessChain,
    PropertyAccessEntityNameExpression,
    PropertyAccessExpression,
    PropertyAssignment,
    PropertyDeclaration,
    PropertyName,
    PropertySignature,
    PseudoBigInt,
    pseudoBigIntToString,
    PunctuationSyntaxKind,
    pushIfUnique,
    QualifiedName,
    QuestionToken,
    rangeEquals,
    rangeOfNode,
    rangeOfTypeParameters,
    ReadonlyKeyword,
    reduceLeft,
    RegularExpressionLiteral,
    RelationComparisonResult,
    relativeComplement,
    removeExtension,
    removePrefix,
    replaceElement,
    resolutionExtensionIsTSOrJson,
    ResolutionMode,
    ResolvedModuleFull,
    ResolvedType,
    resolvingEmptyArray,
    RestTypeNode,
    ReturnStatement,
    ReverseMappedSymbol,
    ReverseMappedType,
    sameMap,
    SatisfiesExpression,
    Scanner,
    scanTokenAtPosition,
    ScriptKind,
    ScriptTarget,
    SetAccessorDeclaration,
    setCommentRange as setCommentRangeWorker,
    setEmitFlags,
    setIdentifierTypeArguments,
    setNodeFlags,
    setOriginalNode,
    setParent,
    setSyntheticLeadingComments,
    setTextRange as setTextRangeWorker,
    setTextRangePosEnd,
    setValueDeclaration,
    ShorthandPropertyAssignment,
    shouldAllowImportingTsExtension,
    shouldPreserveConstEnums,
    shouldRewriteModuleSpecifier,
    Signature,
    SignatureDeclaration,
    SignatureFlags,
    SignatureKind,
    singleElementArray,
    skipOuterExpressions,
    skipParentheses,
    skipTrivia,
    skipTypeChecking,
    skipTypeParentheses,
    some,
    SourceFile,
    sourceFileMayBeEmitted,
    SpreadAssignment,
    SpreadElement,
    startsWith,
    Statement,
    StringLiteral,
    StringLiteralLike,
    StringLiteralType,
    StringMappingType,
    stripQuotes,
    StructuredType,
    SubstitutionType,
    SuperCall,
    SwitchStatement,
    Symbol,
    SymbolAccessibility,
    SymbolAccessibilityResult,
    SymbolFlags,
    SymbolFormatFlags,
    SymbolId,
    SymbolLinks,
    symbolName,
    SymbolTable,
    SymbolTracker,
    SymbolVisibilityResult,
    SyntacticTypeNodeBuilderContext,
    SyntacticTypeNodeBuilderResolver,
    SyntaxKind,
    SyntheticDefaultModuleType,
    SyntheticExpression,
    TaggedTemplateExpression,
    TemplateExpression,
    TemplateLiteralType,
    TemplateLiteralTypeNode,
    Ternary,
    textRangeContainsPositionInclusive,
    TextSpan,
    textSpanContainsPosition,
    textSpanEnd,
    ThisExpression,
    ThisTypeNode,
    ThrowStatement,
    TokenFlags,
    tokenToString,
    tracing,
    TracingNode,
    TrackedSymbol,
    TransientSymbol,
    TransientSymbolLinks,
    tryAddToSet,
    tryCast,
    tryExtractTSExtension,
    tryGetClassImplementingOrExtendingExpressionWithTypeArguments,
    tryGetExtensionFromPath,
    tryGetJSDocSatisfiesTypeNode,
    tryGetModuleSpecifierFromDeclaration,
    tryGetPropertyAccessOrIdentifierToString,
    TryStatement,
    TupleType,
    TupleTypeNode,
    TupleTypeReference,
    Type,
    TypeAliasDeclaration,
    TypeAssertion,
    TypeChecker,
    TypeCheckerHost,
    TypeComparer,
    TypeElement,
    TypeFlags,
    TypeFormatFlags,
    TypeId,
    TypeLiteralNode,
    TypeMapKind,
    TypeMapper,
    TypeNode,
    TypeNodeSyntaxKind,
    TypeOfExpression,
    TypeOnlyAliasDeclaration,
    TypeOnlyCompatibleAliasDeclaration,
    TypeOperatorNode,
    TypeParameter,
    TypeParameterDeclaration,
    TypePredicate,
    TypePredicateKind,
    TypePredicateNode,
    TypeQueryNode,
    TypeReference,
    TypeReferenceNode,
    TypeReferenceSerializationKind,
    TypeReferenceType,
    TypeVariable,
    unescapeLeadingUnderscores,
    UnionOrIntersectionType,
    UnionOrIntersectionTypeNode,
    UnionReduction,
    UnionType,
    UnionTypeNode,
    UniqueESSymbolType,
    usesWildcardTypes,
    usingSingleLineStringWriter,
    VariableDeclaration,
    VariableDeclarationList,
    VariableLikeDeclaration,
    VariableStatement,
    VarianceFlags,
    visitEachChild as visitEachChildWorker,
    visitNode,
    visitNodes,
    Visitor,
    VisitResult,
    VoidExpression,
    walkUpBindingElementsAndPatterns,
    walkUpOuterExpressions,
    walkUpParenthesizedExpressions,
    walkUpParenthesizedTypes,
    walkUpParenthesizedTypesAndGetParentAndChild,
    WhileStatement,
    WideningContext,
    WithStatement,
    WriterContextOut,
    YieldExpression,
} from "./_namespaces/ts.js";
import * as moduleSpecifiers from "./_namespaces/ts.moduleSpecifiers.js";
import * as performance from "./_namespaces/ts.performance.js";

const ambientModuleSymbolRegex = /^".+"$/;
const anon = "(anonymous)" as __String & string;

const enum ReferenceHint {
    Unspecified,
    Identifier,
    Property,
    ExportAssignment,
    Jsx,
    AsyncFunction,
    ExportImportEquals,
    ExportSpecifier,
    Decorator,
}

let nextSymbolId = 1;
let nextNodeId = 1;
let nextMergeId = 1;
let nextFlowId = 1;

const enum IterationUse {
    AllowsSyncIterablesFlag = 1 << 0,
    AllowsAsyncIterablesFlag = 1 << 1,
    AllowsStringInputFlag = 1 << 2,
    ForOfFlag = 1 << 3,
    YieldStarFlag = 1 << 4,
    SpreadFlag = 1 << 5,
    DestructuringFlag = 1 << 6,
    PossiblyOutOfBounds = 1 << 7,

    // Spread, Destructuring, Array element assignment
    Element = AllowsSyncIterablesFlag,
    Spread = AllowsSyncIterablesFlag | SpreadFlag,
    Destructuring = AllowsSyncIterablesFlag | DestructuringFlag,

    ForOf = AllowsSyncIterablesFlag | AllowsStringInputFlag | ForOfFlag,
    ForAwaitOf = AllowsSyncIterablesFlag | AllowsAsyncIterablesFlag | AllowsStringInputFlag | ForOfFlag,

    YieldStar = AllowsSyncIterablesFlag | YieldStarFlag,
    AsyncYieldStar = AllowsSyncIterablesFlag | AllowsAsyncIterablesFlag | YieldStarFlag,

    GeneratorReturnType = AllowsSyncIterablesFlag,
    AsyncGeneratorReturnType = AllowsAsyncIterablesFlag,
}

const enum IterationTypeKind {
    Yield,
    Return,
    Next,
}

interface IterationTypesResolver {
    iterableCacheKey: "iterationTypesOfAsyncIterable" | "iterationTypesOfIterable";
    iteratorCacheKey: "iterationTypesOfAsyncIterator" | "iterationTypesOfIterator";
    iteratorSymbolName: "asyncIterator" | "iterator";
    getGlobalIteratorType: (reportErrors: boolean) => GenericType;
    getGlobalIterableType: (reportErrors: boolean) => GenericType;
    getGlobalIterableIteratorType: (reportErrors: boolean) => GenericType;
    getGlobalIteratorObjectType: (reportErrors: boolean) => GenericType;
    getGlobalGeneratorType: (reportErrors: boolean) => GenericType;
    getGlobalBuiltinIteratorTypes: () => readonly GenericType[];
    resolveIterationType: (type: Type, errorNode: Node | undefined) => Type | undefined;
    mustHaveANextMethodDiagnostic: DiagnosticMessage;
    mustBeAMethodDiagnostic: DiagnosticMessage;
    mustHaveAValueDiagnostic: DiagnosticMessage;
}

const enum WideningKind {
    Normal,
    FunctionReturn,
    GeneratorNext,
    GeneratorYield,
}

// dprint-ignore
/** @internal */
export const enum TypeFacts {
    None = 0,
    TypeofEQString = 1 << 0,      // typeof x === "string"
    TypeofEQNumber = 1 << 1,      // typeof x === "number"
    TypeofEQBigInt = 1 << 2,      // typeof x === "bigint"
    TypeofEQBoolean = 1 << 3,     // typeof x === "boolean"
    TypeofEQSymbol = 1 << 4,      // typeof x === "symbol"
    TypeofEQObject = 1 << 5,      // typeof x === "object"
    TypeofEQFunction = 1 << 6,    // typeof x === "function"
    TypeofEQHostObject = 1 << 7,  // typeof x === "xxx"
    TypeofNEString = 1 << 8,      // typeof x !== "string"
    TypeofNENumber = 1 << 9,      // typeof x !== "number"
    TypeofNEBigInt = 1 << 10,     // typeof x !== "bigint"
    TypeofNEBoolean = 1 << 11,    // typeof x !== "boolean"
    TypeofNESymbol = 1 << 12,     // typeof x !== "symbol"
    TypeofNEObject = 1 << 13,     // typeof x !== "object"
    TypeofNEFunction = 1 << 14,   // typeof x !== "function"
    TypeofNEHostObject = 1 << 15, // typeof x !== "xxx"
    EQUndefined = 1 << 16,        // x === undefined
    EQNull = 1 << 17,             // x === null
    EQUndefinedOrNull = 1 << 18,  // x === undefined / x === null
    NEUndefined = 1 << 19,        // x !== undefined
    NENull = 1 << 20,             // x !== null
    NEUndefinedOrNull = 1 << 21,  // x != undefined / x != null
    Truthy = 1 << 22,             // x
    Falsy = 1 << 23,              // !x
    IsUndefined = 1 << 24,        // Contains undefined or intersection with undefined
    IsNull = 1 << 25,             // Contains null or intersection with null
    IsUndefinedOrNull = IsUndefined | IsNull,
    All = (1 << 27) - 1,
    // The following members encode facts about particular kinds of types for use in the getTypeFacts function.
    // The presence of a particular fact means that the given test is true for some (and possibly all) values
    // of that kind of type.
    BaseStringStrictFacts = TypeofEQString | TypeofNENumber | TypeofNEBigInt | TypeofNEBoolean | TypeofNESymbol | TypeofNEObject | TypeofNEFunction | TypeofNEHostObject | NEUndefined | NENull | NEUndefinedOrNull,
    BaseStringFacts = BaseStringStrictFacts | EQUndefined | EQNull | EQUndefinedOrNull | Falsy,
    StringStrictFacts = BaseStringStrictFacts | Truthy | Falsy,
    StringFacts = BaseStringFacts | Truthy,
    EmptyStringStrictFacts = BaseStringStrictFacts | Falsy,
    EmptyStringFacts = BaseStringFacts,
    NonEmptyStringStrictFacts = BaseStringStrictFacts | Truthy,
    NonEmptyStringFacts = BaseStringFacts | Truthy,
    BaseNumberStrictFacts = TypeofEQNumber | TypeofNEString | TypeofNEBigInt | TypeofNEBoolean | TypeofNESymbol | TypeofNEObject | TypeofNEFunction | TypeofNEHostObject | NEUndefined | NENull | NEUndefinedOrNull,
    BaseNumberFacts = BaseNumberStrictFacts | EQUndefined | EQNull | EQUndefinedOrNull | Falsy,
    NumberStrictFacts = BaseNumberStrictFacts | Truthy | Falsy,
    NumberFacts = BaseNumberFacts | Truthy,
    ZeroNumberStrictFacts = BaseNumberStrictFacts | Falsy,
    ZeroNumberFacts = BaseNumberFacts,
    NonZeroNumberStrictFacts = BaseNumberStrictFacts | Truthy,
    NonZeroNumberFacts = BaseNumberFacts | Truthy,
    BaseBigIntStrictFacts = TypeofEQBigInt | TypeofNEString | TypeofNENumber | TypeofNEBoolean | TypeofNESymbol | TypeofNEObject | TypeofNEFunction | TypeofNEHostObject | NEUndefined | NENull | NEUndefinedOrNull,
    BaseBigIntFacts = BaseBigIntStrictFacts | EQUndefined | EQNull | EQUndefinedOrNull | Falsy,
    BigIntStrictFacts = BaseBigIntStrictFacts | Truthy | Falsy,
    BigIntFacts = BaseBigIntFacts | Truthy,
    ZeroBigIntStrictFacts = BaseBigIntStrictFacts | Falsy,
    ZeroBigIntFacts = BaseBigIntFacts,
    NonZeroBigIntStrictFacts = BaseBigIntStrictFacts | Truthy,
    NonZeroBigIntFacts = BaseBigIntFacts | Truthy,
    BaseBooleanStrictFacts = TypeofEQBoolean | TypeofNEString | TypeofNENumber | TypeofNEBigInt | TypeofNESymbol | TypeofNEObject | TypeofNEFunction | TypeofNEHostObject | NEUndefined | NENull | NEUndefinedOrNull,
    BaseBooleanFacts = BaseBooleanStrictFacts | EQUndefined | EQNull | EQUndefinedOrNull | Falsy,
    BooleanStrictFacts = BaseBooleanStrictFacts | Truthy | Falsy,
    BooleanFacts = BaseBooleanFacts | Truthy,
    FalseStrictFacts = BaseBooleanStrictFacts | Falsy,
    FalseFacts = BaseBooleanFacts,
    TrueStrictFacts = BaseBooleanStrictFacts | Truthy,
    TrueFacts = BaseBooleanFacts | Truthy,
    SymbolStrictFacts = TypeofEQSymbol | TypeofNEString | TypeofNENumber | TypeofNEBigInt | TypeofNEBoolean | TypeofNEObject | TypeofNEFunction | TypeofNEHostObject | NEUndefined | NENull | NEUndefinedOrNull | Truthy,
    SymbolFacts = SymbolStrictFacts | EQUndefined | EQNull | EQUndefinedOrNull | Falsy,
    ObjectStrictFacts = TypeofEQObject | TypeofEQHostObject | TypeofNEString | TypeofNENumber | TypeofNEBigInt | TypeofNEBoolean | TypeofNESymbol | TypeofNEFunction | NEUndefined | NENull | NEUndefinedOrNull | Truthy,
    ObjectFacts = ObjectStrictFacts | EQUndefined | EQNull | EQUndefinedOrNull | Falsy,
    FunctionStrictFacts = TypeofEQFunction | TypeofEQHostObject | TypeofNEString | TypeofNENumber | TypeofNEBigInt | TypeofNEBoolean | TypeofNESymbol | TypeofNEObject | NEUndefined | NENull | NEUndefinedOrNull | Truthy,
    FunctionFacts = FunctionStrictFacts | EQUndefined | EQNull | EQUndefinedOrNull | Falsy,
    VoidFacts = TypeofNEString | TypeofNENumber | TypeofNEBigInt | TypeofNEBoolean | TypeofNESymbol | TypeofNEObject | TypeofNEFunction | TypeofNEHostObject | EQUndefined | EQUndefinedOrNull | NENull | Falsy,
    UndefinedFacts = TypeofNEString | TypeofNENumber | TypeofNEBigInt | TypeofNEBoolean | TypeofNESymbol | TypeofNEObject | TypeofNEFunction | TypeofNEHostObject | EQUndefined | EQUndefinedOrNull | NENull | Falsy | IsUndefined,
    NullFacts = TypeofEQObject | TypeofNEString | TypeofNENumber | TypeofNEBigInt | TypeofNEBoolean | TypeofNESymbol | TypeofNEFunction | TypeofNEHostObject | EQNull | EQUndefinedOrNull | NEUndefined | Falsy | IsNull,
    EmptyObjectStrictFacts = All & ~(EQUndefined | EQNull | EQUndefinedOrNull | IsUndefinedOrNull),
    EmptyObjectFacts = All & ~IsUndefinedOrNull,
    UnknownFacts = All & ~IsUndefinedOrNull,
    AllTypeofNE = TypeofNEString | TypeofNENumber | TypeofNEBigInt | TypeofNEBoolean | TypeofNESymbol | TypeofNEObject | TypeofNEFunction | NEUndefined,
    // Masks
    OrFactsMask = TypeofEQFunction | TypeofNEObject,
    AndFactsMask = All & ~OrFactsMask,
}

const typeofNEFacts: ReadonlyMap<string, TypeFacts> = new Map(Object.entries({
    string: TypeFacts.TypeofNEString,
    number: TypeFacts.TypeofNENumber,
    bigint: TypeFacts.TypeofNEBigInt,
    boolean: TypeFacts.TypeofNEBoolean,
    symbol: TypeFacts.TypeofNESymbol,
    undefined: TypeFacts.NEUndefined,
    object: TypeFacts.TypeofNEObject,
    function: TypeFacts.TypeofNEFunction,
}));

type TypeSystemEntity = Node | Symbol | Type | Signature;

const enum TypeSystemPropertyName {
    Type,
    ResolvedBaseConstructorType,
    DeclaredType,
    ResolvedReturnType,
    ImmediateBaseConstraint,
    ResolvedTypeArguments,
    ResolvedBaseTypes,
    WriteType,
    ParameterInitializerContainsUndefined,
}

// dprint-ignore
/** @internal */
export const enum CheckMode {
    Normal = 0,                                     // Normal type checking
    Contextual = 1 << 0,                            // Explicitly assigned contextual type, therefore not cacheable
    Inferential = 1 << 1,                           // Inferential typing
    SkipContextSensitive = 1 << 2,                  // Skip context sensitive function expressions
    SkipGenericFunctions = 1 << 3,                  // Skip single signature generic functions
    IsForSignatureHelp = 1 << 4,                    // Call resolution for purposes of signature help
    RestBindingElement = 1 << 5,                    // Checking a type that is going to be used to determine the type of a rest binding element
                                                    //   e.g. in `const { a, ...rest } = foo`, when checking the type of `foo` to determine the type of `rest`,
                                                    //   we need to preserve generic types instead of substituting them for constraints
    TypeOnly = 1 << 6,                              // Called from getTypeOfExpression, diagnostics may be omitted
}

/** @internal */
export const enum SignatureCheckMode {
    None = 0,
    BivariantCallback = 1 << 0,
    StrictCallback = 1 << 1,
    IgnoreReturnTypes = 1 << 2,
    StrictArity = 1 << 3,
    StrictTopSignature = 1 << 4,
    Callback = BivariantCallback | StrictCallback,
}

const enum IntersectionState {
    None = 0,
    Source = 1 << 0, // Source type is a constituent of an outer intersection
    Target = 1 << 1, // Target type is a constituent of an outer intersection
}

const enum RecursionFlags {
    None = 0,
    Source = 1 << 0,
    Target = 1 << 1,
    Both = Source | Target,
}

const enum MappedTypeModifiers {
    IncludeReadonly = 1 << 0,
    ExcludeReadonly = 1 << 1,
    IncludeOptional = 1 << 2,
    ExcludeOptional = 1 << 3,
}

const enum MappedTypeNameTypeKind {
    None,
    Filtering,
    Remapping,
}

const enum ExpandingFlags {
    None = 0,
    Source = 1,
    Target = 1 << 1,
    Both = Source | Target,
}

const enum MembersOrExportsResolutionKind {
    resolvedExports = "resolvedExports",
    resolvedMembers = "resolvedMembers",
}

const enum UnusedKind {
    Local,
    Parameter,
}

/** @param containingNode Node to check for parse error */
type AddUnusedDiagnostic = (containingNode: Node, type: UnusedKind, diagnostic: DiagnosticWithLocation) => void;

const isNotOverloadAndNotAccessor = and(isNotOverload, isNotAccessor);

const enum DeclarationMeaning {
    GetAccessor = 1,
    SetAccessor = 2,
    PropertyAssignment = 4,
    Method = 8,
    PrivateStatic = 16,
    GetOrSetAccessor = GetAccessor | SetAccessor,
    PropertyAssignmentOrMethod = PropertyAssignment | Method,
}

const enum DeclarationSpaces {
    None = 0,
    ExportValue = 1 << 0,
    ExportType = 1 << 1,
    ExportNamespace = 1 << 2,
}

const enum MinArgumentCountFlags {
    None = 0,
    StrongArityForUntypedJS = 1 << 0,
    VoidIsNonOptional = 1 << 1,
}

const enum IntrinsicTypeKind {
    Uppercase,
    Lowercase,
    Capitalize,
    Uncapitalize,
    NoInfer,
}

const intrinsicTypeKinds: ReadonlyMap<string, IntrinsicTypeKind> = new Map(Object.entries({
    Uppercase: IntrinsicTypeKind.Uppercase,
    Lowercase: IntrinsicTypeKind.Lowercase,
    Capitalize: IntrinsicTypeKind.Capitalize,
    Uncapitalize: IntrinsicTypeKind.Uncapitalize,
    NoInfer: IntrinsicTypeKind.NoInfer,
}));

const SymbolLinks = class implements SymbolLinks {
    declare _symbolLinksBrand: any;
};

function NodeLinks(this: NodeLinks) {
    this.flags = NodeCheckFlags.None;
}

/** @internal */
export function getNodeId(node: Node): number {
    if (!node.id) {
        node.id = nextNodeId;
        nextNodeId++;
    }
    return node.id;
}

/** @internal */
export function getSymbolId(symbol: Symbol): SymbolId {
    if (!symbol.id) {
        symbol.id = nextSymbolId;
        nextSymbolId++;
    }

    return symbol.id;
}

/** @internal */
export function isInstantiatedModule(node: ModuleDeclaration, preserveConstEnums: boolean): boolean {
    const moduleState = getModuleInstanceState(node);
    return moduleState === ModuleInstanceState.Instantiated ||
        (preserveConstEnums && moduleState === ModuleInstanceState.ConstEnumOnly);
}

/** @internal */
export function createTypeChecker(host: TypeCheckerHost): TypeChecker {
    // Why var? It avoids TDZ checks in the runtime which can be costly.
    // See: https://github.com/microsoft/TypeScript/issues/52924
    /* eslint-disable no-var */
    var deferredDiagnosticsCallbacks: (() => void)[] = [];

    var addLazyDiagnostic = (arg: () => void) => {
        deferredDiagnosticsCallbacks.push(arg);
    };

    // Cancellation that controls whether or not we can cancel in the middle of type checking.
    // In general cancelling is *not* safe for the type checker.  We might be in the middle of
    // computing something, and we will leave our internals in an inconsistent state.  Callers
    // who set the cancellation token should catch if a cancellation exception occurs, and
    // should throw away and create a new TypeChecker.
    //
    // Currently we only support setting the cancellation token when getting diagnostics.  This
    // is because diagnostics can be quite expensive, and we want to allow hosts to bail out if
    // they no longer need the information (for example, if the user started editing again).
    var cancellationToken: CancellationToken | undefined;

    var scanner: Scanner | undefined;

    var Symbol = objectAllocator.getSymbolConstructor();
    var Type = objectAllocator.getTypeConstructor();
    var Signature = objectAllocator.getSignatureConstructor();

    var typeCount = 0;
    var symbolCount = 0;
    var totalInstantiationCount = 0;
    var instantiationCount = 0;
    var instantiationDepth = 0;
    var inlineLevel = 0;
    var currentNode: Node | undefined;
    var varianceTypeParameter: TypeParameter | undefined;
    var isInferencePartiallyBlocked = false;
    var withinUnreachableCode = false;
    var reportedUnreachableNodes: Set<Node> | undefined;

    var emptySymbols = createSymbolTable();
    var arrayVariances = [VarianceFlags.Covariant];

    var compilerOptions = host.getCompilerOptions();
    var languageVersion = getEmitScriptTarget(compilerOptions);
    var moduleKind = getEmitModuleKind(compilerOptions);
    var legacyDecorators = !!compilerOptions.experimentalDecorators;
    var useDefineForClassFields = getUseDefineForClassFields(compilerOptions);
    var emitStandardClassFields = getEmitStandardClassFields(compilerOptions);
    var allowSyntheticDefaultImports = getAllowSyntheticDefaultImports(compilerOptions);
    var strictNullChecks = getStrictOptionValue(compilerOptions, "strictNullChecks");
    var strictFunctionTypes = getStrictOptionValue(compilerOptions, "strictFunctionTypes");
    var strictBindCallApply = getStrictOptionValue(compilerOptions, "strictBindCallApply");
    var strictPropertyInitialization = getStrictOptionValue(compilerOptions, "strictPropertyInitialization");
    var strictBuiltinIteratorReturn = getStrictOptionValue(compilerOptions, "strictBuiltinIteratorReturn");
    var noImplicitAny = getStrictOptionValue(compilerOptions, "noImplicitAny");
    var noImplicitThis = getStrictOptionValue(compilerOptions, "noImplicitThis");
    var useUnknownInCatchVariables = getStrictOptionValue(compilerOptions, "useUnknownInCatchVariables");
    var exactOptionalPropertyTypes = compilerOptions.exactOptionalPropertyTypes;
    var noUncheckedSideEffectImports = compilerOptions.noUncheckedSideEffectImports !== false;
    var stableTypeOrdering = !!compilerOptions.stableTypeOrdering;

    var fileIndexMap = stableTypeOrdering ? new Map(host.getSourceFiles().map((file, i) => [file, i])) : undefined;

    var checkBinaryExpression = createCheckBinaryExpression();
    var emitResolver = createResolver();
    var nodeBuilder = createNodeBuilder();
    var syntacticNodeBuilder = createSyntacticTypeNodeBuilder(compilerOptions, nodeBuilder.syntacticBuilderResolver);
    var evaluate = createEvaluator({
        evaluateElementAccessExpression,
        evaluateEntityNameExpression,
    });

    var globals = createSymbolTable();
    var undefinedSymbol = createSymbol(SymbolFlags.Property, "undefined" as __String);
    undefinedSymbol.declarations = [];

    var globalThisSymbol = createSymbol(SymbolFlags.Module, "globalThis" as __String, CheckFlags.Readonly);
    globalThisSymbol.exports = globals;
    globalThisSymbol.declarations = [];
    globals.set(globalThisSymbol.escapedName, globalThisSymbol);

    var argumentsSymbol = createSymbol(SymbolFlags.Property, "arguments" as __String);
    var requireSymbol = createSymbol(SymbolFlags.Property, "require" as __String);
    var isolatedModulesLikeFlagName = compilerOptions.verbatimModuleSyntax ? "verbatimModuleSyntax" : "isolatedModules";
    var canCollectSymbolAliasAccessabilityData = !compilerOptions.verbatimModuleSyntax;

    /** This will be set during calls to `getResolvedSignature` where services determines an apparent number of arguments greater than what is actually provided. */
    var apparentArgumentCount: number | undefined;

    var lastGetCombinedNodeFlagsNode: Node | undefined;
    var lastGetCombinedNodeFlagsResult = NodeFlags.None;
    var lastGetCombinedModifierFlagsNode: Declaration | undefined;
    var lastGetCombinedModifierFlagsResult = ModifierFlags.None;
    var resolveName = createNameResolver({
        compilerOptions,
        requireSymbol,
        argumentsSymbol,
        globals,
        getSymbolOfDeclaration,
        error,
        getRequiresScopeChangeCache,
        setRequiresScopeChangeCache,
        lookup: getSymbol,
        onPropertyWithInvalidInitializer: checkAndReportErrorForInvalidInitializer,
        onFailedToResolveSymbol,
        onSuccessfullyResolvedSymbol,
    });

    var resolveNameForSymbolSuggestion = createNameResolver({
        compilerOptions,
        requireSymbol,
        argumentsSymbol,
        globals,
        getSymbolOfDeclaration,
        error,
        getRequiresScopeChangeCache,
        setRequiresScopeChangeCache,
        lookup: getSuggestionForSymbolNameLookup,
    });
    // for public members that accept a Node or one of its subtypes, we must guard against
    // synthetic nodes created during transformations by calling `getParseTreeNode`.
    // for most of these, we perform the guard only on `checker` to avoid any possible
    // extra cost of calling `getParseTreeNode` when calling these functions from inside the
    // checker.
    const checker: TypeChecker = {
        getNodeCount: () => reduceLeft(host.getSourceFiles(), (n, s) => n + s.nodeCount, 0),
        getIdentifierCount: () => reduceLeft(host.getSourceFiles(), (n, s) => n + s.identifierCount, 0),
        getSymbolCount: () => reduceLeft(host.getSourceFiles(), (n, s) => n + s.symbolCount, symbolCount),
        getTypeCount: () => typeCount,
        getInstantiationCount: () => totalInstantiationCount,
        getRelationCacheSizes: () => ({
            assignable: assignableRelation.size,
            identity: identityRelation.size,
            subtype: subtypeRelation.size,
            strictSubtype: strictSubtypeRelation.size,
        }),
        isUndefinedSymbol: symbol => symbol === undefinedSymbol,
        isArgumentsSymbol: symbol => symbol === argumentsSymbol,
        isUnknownSymbol: symbol => symbol === unknownSymbol,
        getMergedSymbol,
        symbolIsValue,
        getDiagnostics,
        getGlobalDiagnostics,
        getRecursionIdentity,
        getUnmatchedProperties,
        getTypeOfSymbolAtLocation: (symbol, locationIn) => {
            const location = getParseTreeNode(locationIn);
            return location ? getTypeOfSymbolAtLocation(symbol, location) : errorType;
        },
        getTypeOfSymbol,
        getSymbolsOfParameterPropertyDeclaration: (parameterIn, parameterName) => {
            const parameter = getParseTreeNode(parameterIn, isParameter);
            if (parameter === undefined) return Debug.fail("Cannot get symbols of a synthetic parameter that cannot be resolved to a parse-tree node.");
            Debug.assert(isParameterPropertyDeclaration(parameter, parameter.parent));
            return getSymbolsOfParameterPropertyDeclaration(parameter, escapeLeadingUnderscores(parameterName));
        },
        getDeclaredTypeOfSymbol,
        getPropertiesOfType,
        getPropertyOfType: (type, name) => getPropertyOfType(type, escapeLeadingUnderscores(name)),
        getPrivateIdentifierPropertyOfType: (leftType: Type, name: string, location: Node) => {
            const node = getParseTreeNode(location);
            if (!node) {
                return undefined;
            }
            const propName = escapeLeadingUnderscores(name);
            const lexicallyScopedIdentifier = lookupSymbolForPrivateIdentifierDeclaration(propName, node);
            return lexicallyScopedIdentifier ? getPrivateIdentifierPropertyOfType(leftType, lexicallyScopedIdentifier) : undefined;
        },
        getTypeOfPropertyOfType: (type, name) => getTypeOfPropertyOfType(type, escapeLeadingUnderscores(name)),
        getIndexInfoOfType: (type, kind) => getIndexInfoOfType(type, kind === IndexKind.String ? stringType : numberType),
        getIndexInfosOfType,
        getIndexInfosOfIndexSymbol,
        getSignaturesOfType,
        getIndexTypeOfType: (type, kind) => getIndexTypeOfType(type, kind === IndexKind.String ? stringType : numberType),
        getIndexType: type => getIndexType(type),
        getBaseTypes,
        getBaseTypeOfLiteralType,
        getWidenedType,
        getWidenedLiteralType,
        fillMissingTypeArguments,
        getTypeFromTypeNode: nodeIn => {
            const node = getParseTreeNode(nodeIn, isTypeNode);
            return node ? getTypeFromTypeNode(node) : errorType;
        },
        getParameterType: getTypeAtPosition,
        getParameterIdentifierInfoAtPosition,
        getPromisedTypeOfPromise,
        getAwaitedType: type => getAwaitedType(type),
        getReturnTypeOfSignature,
        isNullableType,
        getNullableType,
        getNonNullableType,
        getNonOptionalType: removeOptionalTypeMarker,
        getTypeArguments,
        typeToTypeNode: nodeBuilder.typeToTypeNode,
        typePredicateToTypePredicateNode: nodeBuilder.typePredicateToTypePredicateNode,
        indexInfoToIndexSignatureDeclaration: nodeBuilder.indexInfoToIndexSignatureDeclaration,
        signatureToSignatureDeclaration: nodeBuilder.signatureToSignatureDeclaration,
        symbolToEntityName: nodeBuilder.symbolToEntityName,
        symbolToExpression: nodeBuilder.symbolToExpression,
        symbolToNode: nodeBuilder.symbolToNode,
        symbolToTypeParameterDeclarations: nodeBuilder.symbolToTypeParameterDeclarations,
        symbolToParameterDeclaration: nodeBuilder.symbolToParameterDeclaration,
        typeParameterToDeclaration: nodeBuilder.typeParameterToDeclaration,
        getSymbolsInScope: (locationIn, meaning) => {
            const location = getParseTreeNode(locationIn);
            return location ? getSymbolsInScope(location, meaning) : [];
        },
        getSymbolAtLocation: nodeIn => {
            const node = getParseTreeNode(nodeIn);
            // set ignoreErrors: true because any lookups invoked by the API shouldn't cause any new errors
            return node ? getSymbolAtLocation(node, /*ignoreErrors*/ true) : undefined;
        },
        getIndexInfosAtLocation: nodeIn => {
            const node = getParseTreeNode(nodeIn);
            return node ? getIndexInfosAtLocation(node) : undefined;
        },
        getShorthandAssignmentValueSymbol: nodeIn => {
            const node = getParseTreeNode(nodeIn);
            return node ? getShorthandAssignmentValueSymbol(node) : undefined;
        },
        getExportSpecifierLocalTargetSymbol: nodeIn => {
            const node = getParseTreeNode(nodeIn, isExportSpecifier);
            return node ? getExportSpecifierLocalTargetSymbol(node) : undefined;
        },
        getExportSymbolOfSymbol(symbol) {
            return getMergedSymbol(symbol.exportSymbol || symbol);
        },
        getTypeAtLocation: nodeIn => {
            const node = getParseTreeNode(nodeIn);
            return node ? getTypeOfNode(node) : errorType;
        },
        getTypeOfAssignmentPattern: nodeIn => {
            const node = getParseTreeNode(nodeIn, isAssignmentPattern);
            return node && getTypeOfAssignmentPattern(node) || errorType;
        },
        getPropertySymbolOfDestructuringAssignment: locationIn => {
            const location = getParseTreeNode(locationIn, isIdentifier);
            return location ? getPropertySymbolOfDestructuringAssignment(location) : undefined;
        },
        signatureToString: (signature, enclosingDeclaration, flags, kind) => {
            return signatureToString(signature, getParseTreeNode(enclosingDeclaration), flags, kind);
        },
        typeToString: (type, enclosingDeclaration, flags) => {
            return typeToString(type, getParseTreeNode(enclosingDeclaration), flags);
        },
        symbolToString: (symbol, enclosingDeclaration, meaning, flags) => {
            return symbolToString(symbol, getParseTreeNode(enclosingDeclaration), meaning, flags);
        },
        typePredicateToString: (predicate, enclosingDeclaration, flags) => {
            return typePredicateToString(predicate, getParseTreeNode(enclosingDeclaration), flags);
        },
        writeSignature: (signature, enclosingDeclaration, flags, kind, writer, maximumLength, verbosityLevel, out) => {
            return signatureToString(signature, getParseTreeNode(enclosingDeclaration), flags, kind, writer, maximumLength, verbosityLevel, out);
        },
        writeType: (type, enclosingDeclaration, flags, writer, maximumLength, verbosityLevel, out) => {
            return typeToString(type, getParseTreeNode(enclosingDeclaration), flags, writer, maximumLength, verbosityLevel, out);
        },
        writeSymbol: (symbol, enclosingDeclaration, meaning, flags, writer) => {
            return symbolToString(symbol, getParseTreeNode(enclosingDeclaration), meaning, flags, writer);
        },
        writeTypePredicate: (predicate, enclosingDeclaration, flags, writer) => {
            return typePredicateToString(predicate, getParseTreeNode(enclosingDeclaration), flags, writer);
        },
        getAugmentedPropertiesOfType,
        getRootSymbols,
        getSymbolOfExpando,
        getContextualType: (nodeIn: Expression, contextFlags?: ContextFlags) => {
            const node = getParseTreeNode(nodeIn, isExpression);
            if (!node) {
                return undefined;
            }
            if (contextFlags! & ContextFlags.IgnoreNodeInferences) {
                return runWithInferenceBlockedFromSourceNode(node, () => getContextualType(node, contextFlags));
            }
            return getContextualType(node, contextFlags);
        },
        getContextualTypeForObjectLiteralElement: nodeIn => {
            const node = getParseTreeNode(nodeIn, isObjectLiteralElementLike);
            return node ? getContextualTypeForObjectLiteralElement(node, /*contextFlags*/ undefined) : undefined;
        },
        getContextualTypeForArgumentAtIndex: (nodeIn, argIndex) => {
            const node = getParseTreeNode(nodeIn, isCallLikeExpression);
            return node && getContextualTypeForArgumentAtIndex(node, argIndex);
        },
        getContextualTypeForJsxAttribute: nodeIn => {
            const node = getParseTreeNode(nodeIn, isJsxAttributeLike);
            return node && getContextualTypeForJsxAttribute(node, /*contextFlags*/ undefined);
        },
        isContextSensitive,
        getTypeOfPropertyOfContextualType,
        getFullyQualifiedName,
        getResolvedSignature: (node, candidatesOutArray, argumentCount) => getResolvedSignatureWorker(node, candidatesOutArray, argumentCount, CheckMode.Normal),
        getCandidateSignaturesForStringLiteralCompletions,
        getResolvedSignatureForSignatureHelp: (node, candidatesOutArray, argumentCount) => runWithoutResolvedSignatureCaching(node, () => getResolvedSignatureWorker(node, candidatesOutArray, argumentCount, CheckMode.IsForSignatureHelp)),
        getExpandedParameters,
        hasEffectiveRestParameter,
        containsArgumentsReference,
        getConstantValue: nodeIn => {
            const node = getParseTreeNode(nodeIn, canHaveConstantValue);
            return node ? getConstantValue(node) : undefined;
        },
        isValidPropertyAccess: (nodeIn, propertyName) => {
            const node = getParseTreeNode(nodeIn, isPropertyAccessOrQualifiedNameOrImportTypeNode);
            return !!node && isValidPropertyAccess(node, escapeLeadingUnderscores(propertyName));
        },
        isValidPropertyAccessForCompletions: (nodeIn, type, property) => {
            const node = getParseTreeNode(nodeIn, isPropertyAccessExpression);
            return !!node && isValidPropertyAccessForCompletions(node, type, property);
        },
        getSignatureFromDeclaration: declarationIn => {
            const declaration = getParseTreeNode(declarationIn, isFunctionLike);
            return declaration ? getSignatureFromDeclaration(declaration) : undefined;
        },
        isImplementationOfOverload: nodeIn => {
            const node = getParseTreeNode(nodeIn, isFunctionLike);
            return node ? isImplementationOfOverload(node) : undefined;
        },
        getImmediateAliasedSymbol,
        getAliasedSymbol: resolveAlias,
        getEmitResolver,
        requiresAddingImplicitUndefined,
        getExportsOfModule: getExportsOfModuleAsArray,
        getExportsAndPropertiesOfModule,
        forEachExportAndPropertyOfModule,
        getSymbolWalker: createGetSymbolWalker(
            getRestTypeOfSignature,
            getTypePredicateOfSignature,
            getReturnTypeOfSignature,
            getBaseTypes,
            resolveStructuredTypeMembers,
            getTypeOfSymbol,
            getResolvedSymbol,
            getConstraintOfTypeParameter,
            getFirstIdentifier,
            getTypeArguments,
        ),
        getAmbientModules,
        getJsxIntrinsicTagNamesAt,
        isOptionalParameter: nodeIn => {
            const node = getParseTreeNode(nodeIn, isParameter);
            return node ? isOptionalParameter(node) : false;
        },
        tryGetMemberInModuleExports: (name, symbol) => tryGetMemberInModuleExports(escapeLeadingUnderscores(name), symbol),
        tryGetMemberInModuleExportsAndProperties: (name, symbol) => tryGetMemberInModuleExportsAndProperties(escapeLeadingUnderscores(name), symbol),
        tryFindAmbientModule: moduleName => tryFindAmbientModule(moduleName, /*withAugmentations*/ true),
        getApparentType,
        getUnionType,
        isTypeAssignableTo,
        createAnonymousType,
        createSignature,
        createSymbol,
        createIndexInfo,
        getAnyType: () => anyType,
        getStringType: () => stringType,
        getStringLiteralType,
        getNumberType: () => numberType,
        getNumberLiteralType,
        getBigIntType: () => bigintType,
        getBigIntLiteralType,
        getUnknownType: () => unknownType,
        createPromiseType,
        createArrayType,
        getElementTypeOfArrayType,
        getBooleanType: () => booleanType,
        getFalseType: (fresh?) => fresh ? falseType : regularFalseType,
        getTrueType: (fresh?) => fresh ? trueType : regularTrueType,
        getVoidType: () => voidType,
        getUndefinedType: () => undefinedType,
        getNullType: () => nullType,
        getESSymbolType: () => esSymbolType,
        getNeverType: () => neverType,
        getNonPrimitiveType: () => nonPrimitiveType,
        getOptionalType: () => optionalType,
        getPromiseType: () => getGlobalPromiseType(/*reportErrors*/ false),
        getPromiseLikeType: () => getGlobalPromiseLikeType(/*reportErrors*/ false),
        getAnyAsyncIterableType: () => {
            const type = getGlobalAsyncIterableType(/*reportErrors*/ false);
            if (type === emptyGenericType) return undefined;
            return createTypeReference(type, [anyType, anyType, anyType]);
        },
        isSymbolAccessible,
        isArrayType,
        isTupleType,
        isArrayLikeType,
        isEmptyAnonymousObjectType,
        isTypeInvalidDueToUnionDiscriminant,
        getExactOptionalProperties,
        getAllPossiblePropertiesOfTypes,
        getSuggestedSymbolForNonexistentProperty,
        getSuggestedSymbolForNonexistentJSXAttribute,
        getSuggestedSymbolForNonexistentSymbol: (location, name, meaning) => getSuggestedSymbolForNonexistentSymbol(location, escapeLeadingUnderscores(name), meaning),
        getSuggestedSymbolForNonexistentModule,
        getSuggestedSymbolForNonexistentClassMember,
        getBaseConstraintOfType,
        getDefaultFromTypeParameter: type => type && type.flags & TypeFlags.TypeParameter ? getDefaultFromTypeParameter(type as TypeParameter) : undefined,
        resolveName(name, location, meaning, excludeGlobals) {
            return resolveName(location, escapeLeadingUnderscores(name), meaning, /*nameNotFoundMessage*/ undefined, /*isUse*/ false, excludeGlobals);
        },
        getJsxNamespace: n => unescapeLeadingUnderscores(getJsxNamespace(n)),
        getJsxFragmentFactory: n => {
            const jsxFragmentFactory = getJsxFragmentFactoryEntity(n);
            return jsxFragmentFactory && unescapeLeadingUnderscores(getFirstIdentifier(jsxFragmentFactory).escapedText);
        },
        getAccessibleSymbolChain,
        getTypePredicateOfSignature,
        resolveExternalModuleName: moduleSpecifierIn => {
            const moduleSpecifier = getParseTreeNode(moduleSpecifierIn, isExpression);
            return moduleSpecifier && resolveExternalModuleName(moduleSpecifier, moduleSpecifier, /*ignoreErrors*/ true);
        },
        resolveExternalModuleSymbol,
        tryGetThisTypeAt: (nodeIn, includeGlobalThis, container) => {
            const node = getParseTreeNode(nodeIn);
            return node && tryGetThisTypeAt(node, includeGlobalThis, container);
        },
        getTypeArgumentConstraint: nodeIn => {
            const node = getParseTreeNode(nodeIn, isTypeNode);
            return node && getTypeArgumentConstraint(node);
        },
        getSuggestionDiagnostics: (fileIn, ct) => {
            const file = getParseTreeNode(fileIn, isSourceFile) || Debug.fail("Could not determine parsed source file.");
            if (skipTypeChecking(file, compilerOptions, host)) {
                return emptyArray;
            }

            let diagnostics: DiagnosticWithLocation[] | undefined;
            try {
                // Record the cancellation token so it can be checked later on during checkSourceElement.
                // Do this in a finally block so we can ensure that it gets reset back to nothing after
                // this call is done.
                cancellationToken = ct;

                // Ensure file is type checked, with _eager_ diagnostic production, so identifiers are registered as potentially unused
                checkSourceFileWithEagerDiagnostics(file);
                Debug.assert(!!(getNodeLinks(file).flags & NodeCheckFlags.TypeChecked));

                diagnostics = addRange(diagnostics, suggestionDiagnostics.getDiagnostics(file.fileName));
                checkUnusedIdentifiers(getPotentiallyUnusedIdentifiers(file), (containingNode, kind, diag) => {
                    if (!containsParseError(containingNode) && !unusedIsError(kind, !!(containingNode.flags & NodeFlags.Ambient))) {
                        (diagnostics || (diagnostics = [])).push({ ...diag, category: DiagnosticCategory.Suggestion });
                    }
                });

                return diagnostics || emptyArray;
            }
            finally {
                cancellationToken = undefined;
            }
        },

        runWithCancellationToken: (token, callback) => {
            try {
                cancellationToken = token;
                return callback(checker);
            }
            finally {
                cancellationToken = undefined;
            }
        },

        getLocalTypeParametersOfClassOrInterfaceOrTypeAlias,
        isDeclarationVisible,
        isPropertyAccessible,
        getTypeOnlyAliasDeclaration,
        getMemberOverrideModifierStatus,
        isTypeParameterPossiblyReferenced,
        typeHasCallOrConstructSignatures,
        getSymbolFlags,
        getTypeArgumentsForResolvedSignature,
        isLibType,
    };

    function getTypeArgumentsForResolvedSignature(signature: Signature) {
        if (signature.mapper === undefined) return undefined;
        return instantiateTypes((signature.target || signature).typeParameters, signature.mapper);
    }

    function getCandidateSignaturesForStringLiteralCompletions(call: CallLikeExpression, editingArgument: Node) {
        const candidatesSet = new Set<Signature>();
        const candidates: Signature[] = [];

        // first, get candidates when inference is blocked from the source node.
        runWithInferenceBlockedFromSourceNode(editingArgument, () => getResolvedSignatureWorker(call, candidates, /*argumentCount*/ undefined, CheckMode.Normal));
        for (const candidate of candidates) {
            candidatesSet.add(candidate);
        }

        // reset candidates for second pass
        candidates.length = 0;

        // next, get candidates where the source node is considered for inference.
        runWithoutResolvedSignatureCaching(editingArgument, () => getResolvedSignatureWorker(call, candidates, /*argumentCount*/ undefined, CheckMode.Normal));
        for (const candidate of candidates) {
            candidatesSet.add(candidate);
        }

        return arrayFrom(candidatesSet);
    }

    function runWithoutResolvedSignatureCaching<T>(node: Node | undefined, fn: () => T): T {
        node = findAncestor(node, isCallLikeOrFunctionLikeExpression);
        if (node) {
            const cachedResolvedSignatures = [];
            const cachedTypes = [];
            while (node) {
                const nodeLinks = getNodeLinks(node);
                cachedResolvedSignatures.push([nodeLinks, nodeLinks.resolvedSignature] as const);
                nodeLinks.resolvedSignature = undefined;
                if (isFunctionExpressionOrArrowFunction(node)) {
                    const symbolLinks = getSymbolLinks(getSymbolOfDeclaration(node));
                    const type = symbolLinks.type;
                    cachedTypes.push([symbolLinks, type] as const);
                    symbolLinks.type = undefined;
                }
                node = findAncestor(node.parent, isCallLikeOrFunctionLikeExpression);
            }
            const result = fn();
            for (const [nodeLinks, resolvedSignature] of cachedResolvedSignatures) {
                nodeLinks.resolvedSignature = resolvedSignature;
            }
            for (const [symbolLinks, type] of cachedTypes) {
                symbolLinks.type = type;
            }
            return result;
        }
        return fn();
    }

    function runWithInferenceBlockedFromSourceNode<T>(node: Node | undefined, fn: () => T): T {
        const containingCall = findAncestor(node, isCallLikeExpression);
        if (containingCall) {
            let toMarkSkip = node!;
            do {
                getNodeLinks(toMarkSkip).skipDirectInference = true;
                toMarkSkip = toMarkSkip.parent;
            }
            while (toMarkSkip && toMarkSkip !== containingCall);
        }

        isInferencePartiallyBlocked = true;
        const result = runWithoutResolvedSignatureCaching(node, fn);
        isInferencePartiallyBlocked = false;

        if (containingCall) {
            let toMarkSkip = node!;
            do {
                getNodeLinks(toMarkSkip).skipDirectInference = undefined;
                toMarkSkip = toMarkSkip.parent;
            }
            while (toMarkSkip && toMarkSkip !== containingCall);
        }
        return result;
    }

    function getResolvedSignatureWorker(nodeIn: CallLikeExpression, candidatesOutArray: Signature[] | undefined, argumentCount: number | undefined, checkMode: CheckMode): Signature | undefined {
        const node = getParseTreeNode(nodeIn, isCallLikeExpression);
        apparentArgumentCount = argumentCount;
        const res = !node ? undefined : getResolvedSignature(node, candidatesOutArray, checkMode);
        apparentArgumentCount = undefined;
        return res;
    }

    var tupleTypes = new Map<string, GenericType>();
    var unionTypes = new Map<string, UnionType>();
    var unionOfUnionTypes = new Map<string, Type>();
    var intersectionTypes = new Map<string, Type>();
    var stringLiteralTypes = new Map<string, StringLiteralType>();
    var numberLiteralTypes = new Map<number, NumberLiteralType>();
    var bigIntLiteralTypes = new Map<string, BigIntLiteralType>();
    var enumLiteralTypes = new Map<string, LiteralType>();
    var indexedAccessTypes = new Map<string, IndexedAccessType>();
    var templateLiteralTypes = new Map<string, TemplateLiteralType>();
    var stringMappingTypes = new Map<string, StringMappingType>();
    var substitutionTypes = new Map<string, SubstitutionType>();
    var subtypeReductionCache = new Map<string, Type[]>();
    var decoratorContextOverrideTypeCache = new Map<string, Type>();
    var cachedTypes = new Map<string, Type>();
    var evolvingArrayTypes: EvolvingArrayType[] = [];
    var undefinedProperties: SymbolTable = new Map();
    var markerTypes = new Set<number>();

    var unknownSymbol = createSymbol(SymbolFlags.Property, "unknown" as __String);
    var resolvingSymbol = createSymbol(0, InternalSymbolName.Resolving);
    var unresolvedSymbols = new Map<string, TransientSymbol>();
    var errorTypes = new Map<string, Type>();

    // We specifically create the `undefined` and `null` types before any other types that can occur in
    // unions such that they are given low type IDs and occur first in the sorted list of union constituents.
    // We can then just examine the first constituent(s) of a union to check for their presence.

    var seenIntrinsicNames = new Set<string>();

    var anyType = createIntrinsicType(TypeFlags.Any, "any");
    var autoType = createIntrinsicType(TypeFlags.Any, "any", ObjectFlags.NonInferrableType, "auto");
    var wildcardType = createIntrinsicType(TypeFlags.Any, "any", /*objectFlags*/ undefined, "wildcard");
    var blockedStringType = createIntrinsicType(TypeFlags.Any, "any", /*objectFlags*/ undefined, "blocked string");
    var errorType = createIntrinsicType(TypeFlags.Any, "error");
    var unresolvedType = createIntrinsicType(TypeFlags.Any, "unresolved");
    var nonInferrableAnyType = createIntrinsicType(TypeFlags.Any, "any", ObjectFlags.ContainsWideningType, "non-inferrable");
    var intrinsicMarkerType = createIntrinsicType(TypeFlags.Any, "intrinsic");
    var unknownType = createIntrinsicType(TypeFlags.Unknown, "unknown");
    var undefinedType = createIntrinsicType(TypeFlags.Undefined, "undefined");
    var undefinedWideningType = strictNullChecks ? undefinedType : createIntrinsicType(TypeFlags.Undefined, "undefined", ObjectFlags.ContainsWideningType, "widening");
    var missingType = createIntrinsicType(TypeFlags.Undefined, "undefined", /*objectFlags*/ undefined, "missing");
    var undefinedOrMissingType = exactOptionalPropertyTypes ? missingType : undefinedType;
    var optionalType = createIntrinsicType(TypeFlags.Undefined, "undefined", /*objectFlags*/ undefined, "optional");
    var nullType = createIntrinsicType(TypeFlags.Null, "null");
    var nullWideningType = strictNullChecks ? nullType : createIntrinsicType(TypeFlags.Null, "null", ObjectFlags.ContainsWideningType, "widening");
    var stringType = createIntrinsicType(TypeFlags.String, "string");
    var numberType = createIntrinsicType(TypeFlags.Number, "number");
    var bigintType = createIntrinsicType(TypeFlags.BigInt, "bigint");
    var falseType = createIntrinsicType(TypeFlags.BooleanLiteral, "false", /*objectFlags*/ undefined, "fresh") as FreshableIntrinsicType;
    var regularFalseType = createIntrinsicType(TypeFlags.BooleanLiteral, "false") as FreshableIntrinsicType;
    var trueType = createIntrinsicType(TypeFlags.BooleanLiteral, "true", /*objectFlags*/ undefined, "fresh") as FreshableIntrinsicType;
    var regularTrueType = createIntrinsicType(TypeFlags.BooleanLiteral, "true") as FreshableIntrinsicType;
    trueType.regularType = regularTrueType;
    trueType.freshType = trueType;
    regularTrueType.regularType = regularTrueType;
    regularTrueType.freshType = trueType;
    falseType.regularType = regularFalseType;
    falseType.freshType = falseType;
    regularFalseType.regularType = regularFalseType;
    regularFalseType.freshType = falseType;
    var booleanType = getUnionType([regularFalseType, regularTrueType]);
    var esSymbolType = createIntrinsicType(TypeFlags.ESSymbol, "symbol");
    var voidType = createIntrinsicType(TypeFlags.Void, "void");
    var neverType = createIntrinsicType(TypeFlags.Never, "never");
    var silentNeverType = createIntrinsicType(TypeFlags.Never, "never", ObjectFlags.NonInferrableType, "silent");
    var implicitNeverType = createIntrinsicType(TypeFlags.Never, "never", /*objectFlags*/ undefined, "implicit");
    var unreachableNeverType = createIntrinsicType(TypeFlags.Never, "never", /*objectFlags*/ undefined, "unreachable");
    var nonPrimitiveType = createIntrinsicType(TypeFlags.NonPrimitive, "object");
    var stringOrNumberType = getUnionType([stringType, numberType]);
    var stringNumberSymbolType = getUnionType([stringType, numberType, esSymbolType]);
    var numberOrBigIntType = getUnionType([numberType, bigintType]);
    var templateConstraintType = getUnionType([stringType, numberType, booleanType, bigintType, nullType, undefinedType]) as UnionType;
    var numericStringType = getTemplateLiteralType(["", ""], [numberType]); // The `${number}` type

    var restrictiveMapper: TypeMapper = makeFunctionTypeMapper(t => t.flags & TypeFlags.TypeParameter ? getRestrictiveTypeParameter(t as TypeParameter) : t, () => "(restrictive mapper)");
    var permissiveMapper: TypeMapper = makeFunctionTypeMapper(t => t.flags & TypeFlags.TypeParameter ? wildcardType : t, () => "(permissive mapper)");
    var uniqueLiteralType = createIntrinsicType(TypeFlags.Never, "never", /*objectFlags*/ undefined, "unique literal"); // `uniqueLiteralType` is a special `never` flagged by union reduction to behave as a literal
    var uniqueLiteralMapper: TypeMapper = makeFunctionTypeMapper(t => t.flags & TypeFlags.TypeParameter ? uniqueLiteralType : t, () => "(unique literal mapper)"); // replace all type parameters with the unique literal type (disregarding constraints)
    var outofbandVarianceMarkerHandler: ((onlyUnreliable: boolean) => void) | undefined;
    var reportUnreliableMapper = makeFunctionTypeMapper(t => {
        if (outofbandVarianceMarkerHandler && (t === markerSuperType || t === markerSubType || t === markerOtherType)) {
            outofbandVarianceMarkerHandler(/*onlyUnreliable*/ true);
        }
        return t;
    }, () => "(unmeasurable reporter)");
    var reportUnmeasurableMapper = makeFunctionTypeMapper(t => {
        if (outofbandVarianceMarkerHandler && (t === markerSuperType || t === markerSubType || t === markerOtherType)) {
            outofbandVarianceMarkerHandler(/*onlyUnreliable*/ false);
        }
        return t;
    }, () => "(unreliable reporter)");

    var emptyObjectType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);
    var emptyJsxObjectType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);
    emptyJsxObjectType.objectFlags |= ObjectFlags.JsxAttributes;
    var emptyFreshJsxObjectType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);
    emptyFreshJsxObjectType.objectFlags |= ObjectFlags.JsxAttributes | ObjectFlags.FreshLiteral | ObjectFlags.ObjectLiteral | ObjectFlags.ContainsObjectOrArrayLiteral;

    var emptyTypeLiteralSymbol = createSymbol(SymbolFlags.TypeLiteral, InternalSymbolName.Type);
    emptyTypeLiteralSymbol.members = createSymbolTable();
    var emptyTypeLiteralType = createAnonymousType(emptyTypeLiteralSymbol, emptySymbols, emptyArray, emptyArray, emptyArray);

    var unknownEmptyObjectType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);
    var unknownUnionType = strictNullChecks ? getUnionType([undefinedType, nullType, unknownEmptyObjectType]) : unknownType;

    var emptyGenericType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray) as ObjectType as GenericType;
    emptyGenericType.instantiations = new Map<string, TypeReference>();

    var anyFunctionType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);
    // The anyFunctionType contains the anyFunctionType by definition. The flag is further propagated
    // in getPropagatingFlagsOfTypes, and it is checked in inferFromTypes.
    anyFunctionType.objectFlags |= ObjectFlags.NonInferrableType;

    var noConstraintType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);
    var circularConstraintType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);
    var resolvingDefaultType = createAnonymousType(/*symbol*/ undefined, emptySymbols, emptyArray, emptyArray, emptyArray);

    var markerSuperType = createTypeParameter();
    var markerSubType = createTypeParameter();
    markerSubType.constraint = markerSuperType;
    var markerOtherType = createTypeParameter();

    var markerSuperTypeForCheck = createTypeParameter();
    var markerSubTypeForCheck = createTypeParameter();
    markerSubTypeForCheck.constraint = markerSuperTypeForCheck;

    var noTypePredicate = createTypePredicate(TypePredicateKind.Identifier, "<<unresolved>>", 0, anyType);

    var anySignature = createSignature(/*declaration*/ undefined, /*typeParameters*/ undefined, /*thisParameter*/ undefined, emptyArray, anyType, /*resolvedTypePredicate*/ undefined, 0, SignatureFlags.None);
    var unknownSignature = createSignature(/*declaration*/ undefined, /*typeParameters*/ undefined, /*thisParameter*/ undefined, emptyArray, errorType, /*resolvedTypePredicate*/ undefined, 0, SignatureFlags.None);
    var resolvingSignature = createSignature(/*declaration*/ undefined, /*typeParameters*/ undefined, /*thisParameter*/ undefined, emptyArray, anyType, /*resolvedTypePredicate*/ undefined, 0, SignatureFlags.None);
    var silentNeverSignature = createSignature(/*declaration*/ undefined, /*typeParameters*/ undefined, /*thisParameter*/ undefined, emptyArray, silentNeverType, /*resolvedTypePredicate*/ undefined, 0, SignatureFlags.None);

    var enumNumberIndexInfo = createIndexInfo(numberType, stringType, /*isReadonly*/ true);
    var anyBaseTypeIndexInfo = createIndexInfo(stringType, anyType, /*isReadonly*/ false);

    var iterationTypesCache = new Map<string, IterationTypes>(); // cache for common IterationTypes instances
    var noIterationTypes: IterationTypes = {
        get yieldType(): Type {
            return Debug.fail("Not supported");
        },
        get returnType(): Type {
            return Debug.fail("Not supported");
        },
        get nextType(): Type {
            return Debug.fail("Not supported");
        },
    };

    var anyIterationTypes = createIterationTypes(anyType, anyType, anyType);

    var asyncIterationTypesResolver: IterationTypesResolver = {
        iterableCacheKey: "iterationTypesOfAsyncIterable",
        iteratorCacheKey: "iterationTypesOfAsyncIterator",
        iteratorSymbolName: "asyncIterator",
        getGlobalIteratorType: getGlobalAsyncIteratorType,
        getGlobalIterableType: getGlobalAsyncIterableType,
        getGlobalIterableIteratorType: getGlobalAsyncIterableIteratorType,
        getGlobalIteratorObjectType: getGlobalAsyncIteratorObjectType,
        getGlobalGeneratorType: getGlobalAsyncGeneratorType,
        getGlobalBuiltinIteratorTypes: getGlobalBuiltinAsyncIteratorTypes,
        resolveIterationType: (type, errorNode) => getAwaitedType(type, errorNode, Diagnostics.Type_of_await_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member),
        mustHaveANextMethodDiagnostic: Diagnostics.An_async_iterator_must_have_a_next_method,
        mustBeAMethodDiagnostic: Diagnostics.The_0_property_of_an_async_iterator_must_be_a_method,
        mustHaveAValueDiagnostic: Diagnostics.The_type_returned_by_the_0_method_of_an_async_iterator_must_be_a_promise_for_a_type_with_a_value_property,
    };

    var syncIterationTypesResolver: IterationTypesResolver = {
        iterableCacheKey: "iterationTypesOfIterable",
        iteratorCacheKey: "iterationTypesOfIterator",
        iteratorSymbolName: "iterator",
        getGlobalIteratorType,
        getGlobalIterableType,
        getGlobalIterableIteratorType,
        getGlobalIteratorObjectType,
        getGlobalGeneratorType,
        getGlobalBuiltinIteratorTypes,
        resolveIterationType: (type, _errorNode) => type,
        mustHaveANextMethodDiagnostic: Diagnostics.An_iterator_must_have_a_next_method,
        mustBeAMethodDiagnostic: Diagnostics.The_0_property_of_an_iterator_must_be_a_method,
        mustHaveAValueDiagnostic: Diagnostics.The_type_returned_by_the_0_method_of_an_iterator_must_have_a_value_property,
    };

    interface DuplicateInfoForSymbol {
        readonly firstFileLocations: Declaration[];
        readonly secondFileLocations: Declaration[];
        readonly isBlockScoped: boolean;
    }
    interface DuplicateInfoForFiles {
        readonly firstFile: SourceFile;
        readonly secondFile: SourceFile;
        /** Key is symbol name. */
        readonly conflictingSymbols: Map<string, DuplicateInfoForSymbol>;
    }
    /** Key is "/path/to/a.ts|/path/to/b.ts". */
    var amalgamatedDuplicates: Map<string, DuplicateInfoForFiles> | undefined;
    var reverseMappedCache = new Map<string, Type | undefined>();
    var reverseHomomorphicMappedCache = new Map<string, Type | undefined>();
    var ambientModulesCache: Symbol[] | undefined;
    /**
     * List of every ambient module with a "*" wildcard.
     * Unlike other ambient modules, these can't be stored in `globals` because symbol tables only deal with exact matches.
     * This is only used if there is no exact match.
     */
    var patternAmbientModules: PatternAmbientModule[];
    var patternAmbientModuleAugmentations: Map<string, Symbol> | undefined;

    var globalObjectType: ObjectType;
    var globalFunctionType: ObjectType;
    var globalCallableFunctionType: ObjectType;
    var globalNewableFunctionType: ObjectType;
    var globalArrayType: GenericType;
    var globalReadonlyArrayType: GenericType;
    var globalStringType: ObjectType;
    var globalNumberType: ObjectType;
    var globalBooleanType: ObjectType;
    var globalRegExpType: ObjectType;
    var globalThisType: GenericType;
    var anyArrayType: Type;
    var autoArrayType: Type;
    var anyReadonlyArrayType: Type;
    var deferredGlobalNonNullableTypeAlias: Symbol;

    // The library files are only loaded when the feature is used.
    // This allows users to just specify library files they want to used through --lib
    // and they will not get an error from not having unrelated library files
    var deferredGlobalESSymbolConstructorSymbol: Symbol | undefined;
    var deferredGlobalESSymbolConstructorTypeSymbol: Symbol | undefined;
    var deferredGlobalESSymbolType: ObjectType | undefined;
    var deferredGlobalTypedPropertyDescriptorType: GenericType;
    var deferredGlobalPromiseType: GenericType | undefined;
    var deferredGlobalPromiseLikeType: GenericType | undefined;
    var deferredGlobalPromiseConstructorSymbol: Symbol | undefined;
    var deferredGlobalPromiseConstructorLikeType: ObjectType | undefined;
    var deferredGlobalIterableType: GenericType | undefined;
    var deferredGlobalIteratorType: GenericType | undefined;
    var deferredGlobalIterableIteratorType: GenericType | undefined;
    var deferredGlobalIteratorObjectType: GenericType | undefined;
    var deferredGlobalGeneratorType: GenericType | undefined;
    var deferredGlobalIteratorYieldResultType: GenericType | undefined;
    var deferredGlobalIteratorReturnResultType: GenericType | undefined;
    var deferredGlobalAsyncIterableType: GenericType | undefined;
    var deferredGlobalAsyncIteratorType: GenericType | undefined;
    var deferredGlobalAsyncIterableIteratorType: GenericType | undefined;
    var deferredGlobalBuiltinIteratorTypes: readonly GenericType[] | undefined;
    var deferredGlobalBuiltinAsyncIteratorTypes: readonly GenericType[] | undefined;
    var deferredGlobalAsyncIteratorObjectType: GenericType | undefined;
    var deferredGlobalAsyncGeneratorType: GenericType | undefined;
    var deferredGlobalTemplateStringsArrayType: ObjectType | undefined;
    var deferredGlobalImportMetaType: ObjectType;
    var deferredGlobalImportMetaExpressionType: ObjectType;
    var deferredGlobalImportCallOptionsType: ObjectType | undefined;
    var deferredGlobalImportAttributesType: ObjectType | undefined;
    var deferredGlobalDisposableType: ObjectType | undefined;
    var deferredGlobalAsyncDisposableType: ObjectType | undefined;
    var deferredGlobalExtractSymbol: Symbol | undefined;
    var deferredGlobalOmitSymbol: Symbol | undefined;
    var deferredGlobalAwaitedSymbol: Symbol | undefined;
    var deferredGlobalBigIntType: ObjectType | undefined;
    var deferredGlobalNaNSymbol: Symbol | undefined;
    var deferredGlobalRecordSymbol: Symbol | undefined;
    var deferredGlobalClassDecoratorContextType: GenericType | undefined;
    var deferredGlobalClassMethodDecoratorContextType: GenericType | undefined;
    var deferredGlobalClassGetterDecoratorContextType: GenericType | undefined;
    var deferredGlobalClassSetterDecoratorContextType: GenericType | undefined;
    var deferredGlobalClassAccessorDecoratorContextType: GenericType | undefined;
    var deferredGlobalClassAccessorDecoratorTargetType: GenericType | undefined;
    var deferredGlobalClassAccessorDecoratorResultType: GenericType | undefined;
    var deferredGlobalClassFieldDecoratorContextType: GenericType | undefined;

    var allPotentiallyUnusedIdentifiers = new Map<Path, PotentiallyUnusedIdentifier[]>(); // key is file name

    var flowLoopStart = 0;
    var flowLoopCount = 0;
    var sharedFlowCount = 0;
    var flowAnalysisDisabled = false;
    var flowInvocationCount = 0;
    var lastFlowNode: FlowNode | undefined;
    var lastFlowNodeReachable: boolean;
    var flowTypeCache: Type[] | undefined;

    var contextualTypeNodes: Node[] = [];
    var contextualTypes: (Type | undefined)[] = [];
    var contextualIsCache: boolean[] = [];
    var contextualTypeCount = 0;
    var contextualBindingPatterns: BindingPattern[] = [];

    var inferenceContextNodes: Node[] = [];
    var inferenceContexts: (InferenceContext | undefined)[] = [];
    var inferenceContextCount = 0;

    var activeTypeMappers: TypeMapper[] = [];
    var activeTypeMappersCaches: Map<string, Type>[] = [];
    var activeTypeMappersCount = 0;

    var emptyStringType = getStringLiteralType("");
    var zeroType = getNumberLiteralType(0);
    var zeroBigIntType = getBigIntLiteralType({ negative: false, base10Value: "0" });

    var resolutionTargets: TypeSystemEntity[] = [];
    var resolutionResults: boolean[] = [];
    var resolutionPropertyNames: TypeSystemPropertyName[] = [];
    var resolutionStart = 0;
    var inVarianceComputation = false;

    var suggestionCount = 0;
    var maximumSuggestionCount = 10;
    var mergedSymbols: Symbol[] = [];
    var symbolLinks: SymbolLinks[] = [];
    var nodeLinks: NodeLinks[] = [];
    var flowLoopCaches: Map<string, Type>[] = [];
    var flowLoopNodes: FlowNode[] = [];
    var flowLoopKeys: string[] = [];
    var flowLoopTypes: Type[][] = [];
    var sharedFlowNodes: FlowNode[] = [];
    var sharedFlowTypes: FlowType[] = [];
    var flowNodeReachable: (boolean | undefined)[] = [];
    var flowNodePostSuper: (boolean | undefined)[] = [];
    var potentialThisCollisions: Node[] = [];
    var potentialNewTargetCollisions: Node[] = [];
    var potentialWeakMapSetCollisions: Node[] = [];
    var potentialReflectCollisions: Node[] = [];
    var potentialUnusedRenamedBindingElementsInTypes: BindingElement[] = [];
    var awaitedTypeStack: number[] = [];
    var reverseMappedSourceStack: Type[] = [];
    var reverseMappedTargetStack: Type[] = [];
    var reverseExpandingFlags = ExpandingFlags.None;

    var diagnostics = createDiagnosticCollection();
    var suggestionDiagnostics = createDiagnosticCollection();

    var typeofType = createTypeofType();

    var _jsxNamespace: __String;
    var _jsxFactoryEntity: EntityName | undefined;

    var subtypeRelation = new Map<string, RelationComparisonResult>();
    var strictSubtypeRelation = new Map<string, RelationComparisonResult>();
    var assignableRelation = new Map<string, RelationComparisonResult>();
    var comparableRelation = new Map<string, RelationComparisonResult>();
    var identityRelation = new Map<string, RelationComparisonResult>();
    var enumRelation = new Map<string, RelationComparisonResult>();

    // Extensions suggested for path imports when module resolution is node16 or higher.
    // The first element of each tuple is the extension a file has.
    // The second element of each tuple is the extension that should be used in a path import.
    // e.g. if we want to import file `foo.mts`, we should write `import {} from "./foo.mjs".
    var suggestedExtensions: [string, string][] = [
        [".mts", ".mjs"],
        [".ts", ".js"],
        [".cts", ".cjs"],
        [".mjs", ".mjs"],
        [".js", ".js"],
        [".cjs", ".cjs"],
        [".tsx", compilerOptions.jsx === JsxEmit.Preserve ? ".jsx" : ".js"],
        [".jsx", ".jsx"],
        [".json", ".json"],
    ];

    /* eslint-enable no-var */

    initializeTypeChecker();

    return checker;

    function isDefinitelyReferenceToGlobalSymbolObject(node: Node): boolean {
        if (!isPropertyAccessExpression(node)) return false;
        if (!isIdentifier(node.name)) return false;
        if (!isPropertyAccessExpression(node.expression) && !isIdentifier(node.expression)) return false;
        if (isIdentifier(node.expression)) {
            // Exactly `Symbol.something` and `Symbol` either does not resolve or definitely resolves to the global Symbol
            return idText(node.expression) === "Symbol" && getResolvedSymbol(node.expression) === (getGlobalSymbol("Symbol" as __String, SymbolFlags.Value | SymbolFlags.ExportValue, /*diagnostic*/ undefined) || unknownSymbol);
        }
        if (!isIdentifier(node.expression.expression)) return false;
        // Exactly `globalThis.Symbol.something` and `globalThis` resolves to the global `globalThis`
        return idText(node.expression.name) === "Symbol" && idText(node.expression.expression) === "globalThis" && getResolvedSymbol(node.expression.expression) === globalThisSymbol;
    }

    function getCachedType(key: string | undefined) {
        return key ? cachedTypes.get(key) : undefined;
    }

    function setCachedType(key: string | undefined, type: Type) {
        if (key) cachedTypes.set(key, type);
        return type;
    }

    function getJsxNamespace(location: Node | undefined): __String {
        if (location) {
            const file = getSourceFileOfNode(location);
            if (file) {
                if (isJsxOpeningFragment(location)) {
                    if (file.localJsxFragmentNamespace) {
                        return file.localJsxFragmentNamespace;
                    }
                    const jsxFragmentPragma = file.pragmas.get("jsxfrag");
                    if (jsxFragmentPragma) {
                        const chosenPragma = isArray(jsxFragmentPragma) ? jsxFragmentPragma[0] : jsxFragmentPragma;
                        file.localJsxFragmentFactory = parseIsolatedEntityName(chosenPragma.arguments.factory, languageVersion);
                        visitNode(file.localJsxFragmentFactory, markAsSynthetic, isEntityName);
                        if (file.localJsxFragmentFactory) {
                            return file.localJsxFragmentNamespace = getFirstIdentifier(file.localJsxFragmentFactory).escapedText;
                        }
                    }
                    const entity = getJsxFragmentFactoryEntity(location);
                    if (entity) {
                        file.localJsxFragmentFactory = entity;
                        return file.localJsxFragmentNamespace = getFirstIdentifier(entity).escapedText;
                    }
                }
                else {
                    const localJsxNamespace = getLocalJsxNamespace(file);
                    if (localJsxNamespace) {
                        return file.localJsxNamespace = localJsxNamespace;
                    }
                }
            }
        }
        if (!_jsxNamespace) {
            _jsxNamespace = "React" as __String;
            if (compilerOptions.jsxFactory) {
                _jsxFactoryEntity = parseIsolatedEntityName(compilerOptions.jsxFactory, languageVersion);
                visitNode(_jsxFactoryEntity, markAsSynthetic);
                if (_jsxFactoryEntity) {
                    _jsxNamespace = getFirstIdentifier(_jsxFactoryEntity).escapedText;
                }
            }
            else if (compilerOptions.reactNamespace) {
                _jsxNamespace = escapeLeadingUnderscores(compilerOptions.reactNamespace);
            }
        }
        if (!_jsxFactoryEntity) {
            _jsxFactoryEntity = factory.createQualifiedName(factory.createIdentifier(unescapeLeadingUnderscores(_jsxNamespace)), "createElement");
        }
        return _jsxNamespace;
    }

    function getLocalJsxNamespace(file: SourceFile): __String | undefined {
        if (file.localJsxNamespace) {
            return file.localJsxNamespace;
        }
        const jsxPragma = file.pragmas.get("jsx");
        if (jsxPragma) {
            const chosenPragma = isArray(jsxPragma) ? jsxPragma[0] : jsxPragma;
            file.localJsxFactory = parseIsolatedEntityName(chosenPragma.arguments.factory, languageVersion);
            visitNode(file.localJsxFactory, markAsSynthetic, isEntityName);
            if (file.localJsxFactory) {
                return file.localJsxNamespace = getFirstIdentifier(file.localJsxFactory).escapedText;
            }
        }
    }

    function markAsSynthetic<T extends Node>(node: T): VisitResult<T> {
        setTextRangePosEnd(node, -1, -1);
        return visitEachChildWorker(node, markAsSynthetic, /*context*/ undefined);
    }

    function getEmitResolver(sourceFile: SourceFile, cancellationToken: CancellationToken, skipDiagnostics?: boolean) {
        // Ensure we have all the type information in place for this file so that all the
        // emitter questions of this resolver will return the right information.
        if (!skipDiagnostics) getDiagnostics(sourceFile, cancellationToken);
        return emitResolver;
    }

    function lookupOrIssueError(location: Node | undefined, message: DiagnosticMessage, ...args: DiagnosticArguments): Diagnostic {
        const diagnostic = location
            ? createDiagnosticForNode(location, message, ...args)
            : createCompilerDiagnostic(message, ...args);
        const existing = diagnostics.lookup(diagnostic);
        if (existing) {
            return existing;
        }
        else {
            diagnostics.add(diagnostic);
            return diagnostic;
        }
    }

    function errorSkippedOn(key: keyof CompilerOptions, location: Node | undefined, message: DiagnosticMessage, ...args: DiagnosticArguments): Diagnostic {
        const diagnostic = error(location, message, ...args);
        diagnostic.skippedOn = key;
        return diagnostic;
    }

    function createError(location: Node | undefined, message: DiagnosticMessage, ...args: DiagnosticArguments): Diagnostic {
        return location
            ? createDiagnosticForNode(location, message, ...args)
            : createCompilerDiagnostic(message, ...args);
    }

    function error(location: Node | undefined, message: DiagnosticMessage, ...args: DiagnosticArguments): Diagnostic {
        const diagnostic = createError(location, message, ...args);
        diagnostics.add(diagnostic);
        return diagnostic;
    }

    function getVerbatimModuleSyntaxErrorMessage(node: Node): DiagnosticMessage {
        const sourceFile = getSourceFileOfNode(node);
        const fileName = sourceFile.fileName;

        // Check if the file is .cts or .cjs (CommonJS-specific extensions)
        if (fileExtensionIsOneOf(fileName, [Extension.Cts, Extension.Cjs])) {
            return Diagnostics.ECMAScript_imports_and_exports_cannot_be_written_in_a_CommonJS_file_under_verbatimModuleSyntax;
        }
        else {
            // For .ts, .tsx, .js, etc.
            return Diagnostics.ECMAScript_imports_and_exports_cannot_be_written_in_a_CommonJS_file_under_verbatimModuleSyntax_Adjust_the_type_field_in_the_nearest_package_json_to_make_this_file_an_ECMAScript_module_or_adjust_your_verbatimModuleSyntax_module_and_moduleResolution_settings_in_TypeScript;
        }
    }

    function addErrorOrSuggestion(isError: boolean, diagnostic: Diagnostic) {
        if (isError) {
            diagnostics.add(diagnostic);
        }
        else {
            suggestionDiagnostics.add({ ...diagnostic, category: DiagnosticCategory.Suggestion });
        }
    }
    function errorOrSuggestion(isError: boolean, location: Node, message: DiagnosticMessage | DiagnosticMessageChain, ...args: DiagnosticArguments): void {
        // Pseudo-synthesized input node
        if (location.pos < 0 || location.end < 0) {
            if (!isError) {
                return; // Drop suggestions (we have no span to suggest on)
            }
            // Issue errors globally
            const file = getSourceFileOfNode(location);
            addErrorOrSuggestion(isError, "message" in message ? createFileDiagnostic(file, 0, 0, message, ...args) : createDiagnosticForFileFromMessageChain(file, message)); // eslint-disable-line local/no-in-operator
            return;
        }
        addErrorOrSuggestion(isError, "message" in message ? createDiagnosticForNode(location, message, ...args) : createDiagnosticForNodeFromMessageChain(getSourceFileOfNode(location), location, message)); // eslint-disable-line local/no-in-operator
    }

    function errorAndMaybeSuggestAwait(
        location: Node,
        maybeMissingAwait: boolean,
        message: DiagnosticMessage,
        ...args: DiagnosticArguments
    ): Diagnostic {
        const diagnostic = error(location, message, ...args);
        if (maybeMissingAwait) {
            const related = createDiagnosticForNode(location, Diagnostics.Did_you_forget_to_use_await);
            addRelatedInfo(diagnostic, related);
        }
        return diagnostic;
    }

    function addDeprecatedSuggestionWorker(declarations: Node | Node[], diagnostic: DiagnosticWithLocation) {
        const deprecatedTag = Array.isArray(declarations) ? forEach(declarations, getJSDocDeprecatedTag) : getJSDocDeprecatedTag(declarations);
        if (deprecatedTag) {
            addRelatedInfo(
                diagnostic,
                createDiagnosticForNode(deprecatedTag, Diagnostics.The_declaration_was_marked_as_deprecated_here),
            );
        }
        // We call `addRelatedInfo()` before adding the diagnostic to prevent duplicates.
        suggestionDiagnostics.add(diagnostic);
        return diagnostic;
    }

    function isDeprecatedSymbol(symbol: Symbol) {
        const parentSymbol = getParentOfSymbol(symbol);
        if (parentSymbol && length(symbol.declarations) > 1) {
            return parentSymbol.flags & SymbolFlags.Interface ? some(symbol.declarations, isDeprecatedDeclaration) : every(symbol.declarations, isDeprecatedDeclaration);
        }
        return !!symbol.valueDeclaration && isDeprecatedDeclaration(symbol.valueDeclaration)
            || length(symbol.declarations) && every(symbol.declarations, isDeprecatedDeclaration);
    }

    function isDeprecatedDeclaration(declaration: Declaration) {
        return !!(getCombinedNodeFlagsCached(declaration) & NodeFlags.Deprecated);
    }

    function addDeprecatedSuggestion(location: Node, declarations: Node[], deprecatedEntity: string) {
        const diagnostic = createDiagnosticForNode(location, Diagnostics._0_is_deprecated, deprecatedEntity);
        return addDeprecatedSuggestionWorker(declarations, diagnostic);
    }

    function addDeprecatedSuggestionWithSignature(location: Node, declaration: Node, deprecatedEntity: string | undefined, signatureString: string) {
        const diagnostic = deprecatedEntity
            ? createDiagnosticForNode(location, Diagnostics.The_signature_0_of_1_is_deprecated, signatureString, deprecatedEntity)
            : createDiagnosticForNode(location, Diagnostics._0_is_deprecated, signatureString);
        return addDeprecatedSuggestionWorker(declaration, diagnostic);
    }

    function createSymbol(flags: SymbolFlags, name: __String, checkFlags?: CheckFlags) {
        symbolCount++;
        const symbol = new Symbol(flags | SymbolFlags.Transient, name) as TransientSymbol;
        symbol.links = new SymbolLinks() as TransientSymbolLinks;
        symbol.links.checkFlags = checkFlags || CheckFlags.None;
        return symbol;
    }

    function createParameter(name: __String, type: Type) {
        const symbol = createSymbol(SymbolFlags.FunctionScopedVariable, name);
        symbol.links.type = type;
        return symbol;
    }

    function createProperty(name: __String, type: Type) {
        const symbol = createSymbol(SymbolFlags.Property, name);
        symbol.links.type = type;
        return symbol;
    }

    function getExcludedSymbolFlags(flags: SymbolFlags): SymbolFlags {
        let result: SymbolFlags = 0;
        if (flags & SymbolFlags.BlockScopedVariable) result |= SymbolFlags.BlockScopedVariableExcludes;
        if (flags & SymbolFlags.FunctionScopedVariable) result |= SymbolFlags.FunctionScopedVariableExcludes;
        if (flags & SymbolFlags.Property) result |= SymbolFlags.PropertyExcludes;
        if (flags & SymbolFlags.EnumMember) result |= SymbolFlags.EnumMemberExcludes;
        if (flags & SymbolFlags.Function) result |= SymbolFlags.FunctionExcludes;
        if (flags & SymbolFlags.Class) result |= SymbolFlags.ClassExcludes;
        if (flags & SymbolFlags.Interface) result |= SymbolFlags.InterfaceExcludes;
        if (flags & SymbolFlags.RegularEnum) result |= SymbolFlags.RegularEnumExcludes;
        if (flags & SymbolFlags.ConstEnum) result |= SymbolFlags.ConstEnumExcludes;
        if (flags & SymbolFlags.ValueModule) result |= SymbolFlags.ValueModuleExcludes;
        if (flags & SymbolFlags.Method) result |= SymbolFlags.MethodExcludes;
        if (flags & SymbolFlags.GetAccessor) result |= SymbolFlags.GetAccessorExcludes;
        if (flags & SymbolFlags.SetAccessor) result |= SymbolFlags.SetAccessorExcludes;
        if (flags & SymbolFlags.TypeParameter) result |= SymbolFlags.TypeParameterExcludes;
        if (flags & SymbolFlags.TypeAlias) result |= SymbolFlags.TypeAliasExcludes;
        if (flags & SymbolFlags.Alias) result |= SymbolFlags.AliasExcludes;
        return result;
    }

    function recordMergedSymbol(target: Symbol, source: Symbol) {
        if (!source.mergeId) {
            source.mergeId = nextMergeId;
            nextMergeId++;
        }
        mergedSymbols[source.mergeId] = target;
    }

    function cloneSymbol(symbol: Symbol): TransientSymbol {
        const result = createSymbol(symbol.flags, symbol.escapedName);
        result.declarations = symbol.declarations ? symbol.declarations.slice() : [];
        result.parent = symbol.parent;
        if (symbol.valueDeclaration) result.valueDeclaration = symbol.valueDeclaration;
        if (symbol.constEnumOnlyModule) result.constEnumOnlyModule = true;
        if (symbol.members) result.members = new Map(symbol.members);
        if (symbol.exports) result.exports = new Map(symbol.exports);
        recordMergedSymbol(result, symbol);
        return result;
    }

    /**
     * Note: if target is transient, then it is mutable, and mergeSymbol with both mutate and return it.
     * If target is not transient, mergeSymbol will produce a transient clone, mutate that and return it.
     */
    function mergeSymbol(target: Symbol, source: Symbol, unidirectional = false): Symbol {
        if (
            !(target.flags & getExcludedSymbolFlags(source.flags)) ||
            (source.flags | target.flags) & SymbolFlags.Assignment
        ) {
            if (source === target) {
                // This can happen when an export assigned namespace exports something also erroneously exported at the top level
                // See `declarationFileNoCrashOnExtraExportModifier` for an example
                return target;
            }
            if (!(target.flags & SymbolFlags.Transient)) {
                const resolvedTarget = resolveSymbol(target);
                if (resolvedTarget === unknownSymbol) {
                    return source;
                }
                if (
                    !(resolvedTarget.flags & getExcludedSymbolFlags(source.flags)) ||
                    (source.flags | resolvedTarget.flags) & SymbolFlags.Assignment
                ) {
                    target = cloneSymbol(resolvedTarget);
                }
                else {
                    reportMergeSymbolError(target, source);
                    return source;
                }
            }
            // Javascript static-property-assignment declarations always merge, even though they are also values
            if (source.flags & SymbolFlags.ValueModule && target.flags & SymbolFlags.ValueModule && target.constEnumOnlyModule && !source.constEnumOnlyModule) {
                // reset flag when merging instantiated module into value module that has only const enums
                target.constEnumOnlyModule = false;
            }
            target.flags |= source.flags;
            if (source.valueDeclaration) {
                setValueDeclaration(target, source.valueDeclaration);
            }
            addRange(target.declarations, source.declarations);
            if (source.members) {
                if (!target.members) target.members = createSymbolTable();
                mergeSymbolTable(target.members, source.members, unidirectional);
            }
            if (source.exports) {
                if (!target.exports) target.exports = createSymbolTable();
                mergeSymbolTable(target.exports, source.exports, unidirectional, target);
            }
            if (!unidirectional) {
                recordMergedSymbol(target, source);
            }
        }
        else if (target.flags & SymbolFlags.NamespaceModule) {
            // Do not report an error when merging `var globalThis` with the built-in `globalThis`,
            // as we will already report a "Declaration name conflicts..." error, and this error
            // won't make much sense.
            if (target !== globalThisSymbol) {
                error(
                    source.declarations && getNameOfDeclaration(source.declarations[0]),
                    Diagnostics.Cannot_augment_module_0_with_value_exports_because_it_resolves_to_a_non_module_entity,
                    symbolToString(target),
                );
            }
        }
        else {
            reportMergeSymbolError(target, source);
        }
        return target;

        function reportMergeSymbolError(target: Symbol, source: Symbol) {
            const isEitherEnum = !!(target.flags & SymbolFlags.Enum || source.flags & SymbolFlags.Enum);
            const isEitherBlockScoped = !!(target.flags & SymbolFlags.BlockScopedVariable || source.flags & SymbolFlags.BlockScopedVariable);
            const message = isEitherEnum ? Diagnostics.Enum_declarations_can_only_merge_with_namespace_or_other_enum_declarations
                : isEitherBlockScoped ? Diagnostics.Cannot_redeclare_block_scoped_variable_0
                : Diagnostics.Duplicate_identifier_0;
            const sourceSymbolFile = source.declarations && getSourceFileOfNode(source.declarations[0]);
            const targetSymbolFile = target.declarations && getSourceFileOfNode(target.declarations[0]);

            const isSourcePlainJs = isPlainJsFile(sourceSymbolFile, compilerOptions.checkJs);
            const isTargetPlainJs = isPlainJsFile(targetSymbolFile, compilerOptions.checkJs);
            const symbolName = symbolToString(source);

            // Collect top-level duplicate identifier errors into one mapping, so we can then merge their diagnostics if there are a bunch
            if (sourceSymbolFile && targetSymbolFile && amalgamatedDuplicates && !isEitherEnum && sourceSymbolFile !== targetSymbolFile) {
                const firstFile = comparePaths(sourceSymbolFile.path, targetSymbolFile.path) === Comparison.LessThan ? sourceSymbolFile : targetSymbolFile;
                const secondFile = firstFile === sourceSymbolFile ? targetSymbolFile : sourceSymbolFile;
                const filesDuplicates = getOrUpdate(amalgamatedDuplicates, `${firstFile.path}|${secondFile.path}`, (): DuplicateInfoForFiles => ({ firstFile, secondFile, conflictingSymbols: new Map() }));
                const conflictingSymbolInfo = getOrUpdate(filesDuplicates.conflictingSymbols, symbolName, (): DuplicateInfoForSymbol => ({ isBlockScoped: isEitherBlockScoped, firstFileLocations: [], secondFileLocations: [] }));
                if (!isSourcePlainJs) addDuplicateLocations(conflictingSymbolInfo.firstFileLocations, source);
                if (!isTargetPlainJs) addDuplicateLocations(conflictingSymbolInfo.secondFileLocations, target);
            }
            else {
                if (!isSourcePlainJs) addDuplicateDeclarationErrorsForSymbols(source, message, symbolName, target);
                if (!isTargetPlainJs) addDuplicateDeclarationErrorsForSymbols(target, message, symbolName, source);
            }
        }

        function addDuplicateLocations(locs: Declaration[], symbol: Symbol): void {
            if (symbol.declarations) {
                for (const decl of symbol.declarations) {
                    pushIfUnique(locs, decl);
                }
            }
        }
    }

    function addDuplicateDeclarationErrorsForSymbols(target: Symbol, message: DiagnosticMessage, symbolName: string, source: Symbol) {
        forEach(target.declarations, node => {
            addDuplicateDeclarationError(node, message, symbolName, source.declarations);
        });
    }

    function addDuplicateDeclarationError(node: Declaration, message: DiagnosticMessage, symbolName: string, relatedNodes: readonly Declaration[] | undefined) {
        const errorNode = (getExpandoInitializer(node, /*isPrototypeAssignment*/ false) ? getNameOfExpando(node) : getNameOfDeclaration(node)) || node;
        const err = lookupOrIssueError(errorNode, message, symbolName);
        for (const relatedNode of relatedNodes || emptyArray) {
            const adjustedNode = (getExpandoInitializer(relatedNode, /*isPrototypeAssignment*/ false) ? getNameOfExpando(relatedNode) : getNameOfDeclaration(relatedNode)) || relatedNode;
            if (adjustedNode === errorNode) continue;
            err.relatedInformation = err.relatedInformation || [];
            const leadingMessage = createDiagnosticForNode(adjustedNode, Diagnostics._0_was_also_declared_here, symbolName);
            const followOnMessage = createDiagnosticForNode(adjustedNode, Diagnostics.and_here);
            if (length(err.relatedInformation) >= 5 || some(err.relatedInformation, r => compareDiagnostics(r, followOnMessage) === Comparison.EqualTo || compareDiagnostics(r, leadingMessage) === Comparison.EqualTo)) continue;
            addRelatedInfo(err, !length(err.relatedInformation) ? leadingMessage : followOnMessage);
        }
    }

    function combineSymbolTables(first: SymbolTable | undefined, second: SymbolTable | undefined): SymbolTable | undefined {
        if (!first?.size) return second;
        if (!second?.size) return first;
        const combined = createSymbolTable();
        mergeSymbolTable(combined, first);
        mergeSymbolTable(combined, second);
        return combined;
    }

    function mergeSymbolTable(target: SymbolTable, source: SymbolTable, unidirectional = false, mergedParent?: Symbol) {
        source.forEach((sourceSymbol, id) => {
            const targetSymbol = target.get(id);
            const merged = targetSymbol ? mergeSymbol(targetSymbol, sourceSymbol, unidirectional) : getMergedSymbol(sourceSymbol);
            if (mergedParent && targetSymbol) {
                // If a merge was performed on the target symbol, set its parent to the merged parent that initiated the merge
                // of its exports. Otherwise, `merged` came only from `sourceSymbol` and can keep its parent:
                //
                // // a.ts
                // export interface A { x: number; }
                //
                // // b.ts
                // declare module "./a" {
                //   interface A { y: number; }
                //   interface B {}
                // }
                //
                // When merging the module augmentation into a.ts, the symbol for `A` will itself be merged, so its parent
                // should be the merged module symbol. But the symbol for `B` has only one declaration, so its parent should
                // be the module augmentation symbol, which contains its only declaration.
                if (merged.flags & SymbolFlags.Transient) {
                    merged.parent = mergedParent;
                }
            }
            target.set(id, merged);
        });
    }

    function mergeModuleAugmentation(moduleName: StringLiteral | Identifier): void {
        const moduleAugmentation = moduleName.parent as ModuleDeclaration;
        if (moduleAugmentation.symbol.declarations?.[0] !== moduleAugmentation) {
            // this is a combined symbol for multiple augmentations within the same file.
            // its symbol already has accumulated information for all declarations
            // so we need to add it just once - do the work only for first declaration
            Debug.assert(moduleAugmentation.symbol.declarations!.length > 1);
            return;
        }

        if (isGlobalScopeAugmentation(moduleAugmentation)) {
            mergeSymbolTable(globals, moduleAugmentation.symbol.exports!);
        }
        else {
            // find a module that about to be augmented
            // do not validate names of augmentations that are defined in ambient context
            const moduleNotFoundError = !(moduleName.parent.parent.flags & NodeFlags.Ambient)
                ? Diagnostics.Invalid_module_name_in_augmentation_module_0_cannot_be_found
                : undefined;
            let mainModule = resolveExternalModuleNameWorker(moduleName, moduleName, moduleNotFoundError, /*ignoreErrors*/ false, /*isForAugmentation*/ true);
            if (!mainModule) {
                return;
            }
            // obtain item referenced by 'export='
            mainModule = resolveExternalModuleSymbol(mainModule);
            if (mainModule.flags & SymbolFlags.Namespace) {
                // If we're merging an augmentation to a pattern ambient module, we want to
                // perform the merge unidirectionally from the augmentation ('a.foo') to
                // the pattern ('*.foo'), so that 'getMergedSymbol()' on a.foo gives you
                // all the exports both from the pattern and from the augmentation, but
                // 'getMergedSymbol()' on *.foo only gives you exports from *.foo.
                if (some(patternAmbientModules, module => mainModule === module.symbol)) {
                    const merged = mergeSymbol(moduleAugmentation.symbol, mainModule, /*unidirectional*/ true);
                    if (!patternAmbientModuleAugmentations) {
                        patternAmbientModuleAugmentations = new Map();
                    }
                    // moduleName will be a StringLiteral since this is not `declare global`.
                    patternAmbientModuleAugmentations.set((moduleName as StringLiteral).text, merged);
                }
                else {
                    if (mainModule.exports?.get(InternalSymbolName.ExportStar) && moduleAugmentation.symbol.exports?.size) {
                        // We may need to merge the module augmentation's exports into the target symbols of the resolved exports
                        const resolvedExports = getResolvedMembersOrExportsOfSymbol(mainModule, MembersOrExportsResolutionKind.resolvedExports);
                        for (const [key, value] of arrayFrom(moduleAugmentation.symbol.exports.entries())) {
                            if (resolvedExports.has(key) && !mainModule.exports.has(key)) {
                                mergeSymbol(resolvedExports.get(key)!, value);
                            }
                        }
                    }
                    mergeSymbol(mainModule, moduleAugmentation.symbol);
                }
            }
            else {
                // moduleName will be a StringLiteral since this is not `declare global`.
                error(moduleName, Diagnostics.Cannot_augment_module_0_because_it_resolves_to_a_non_module_entity, (moduleName as StringLiteral).text);
            }
        }
    }

    function addUndefinedToGlobalsOrErrorOnRedeclaration() {
        const name = undefinedSymbol.escapedName;
        const targetSymbol = globals.get(name);
        if (targetSymbol) {
            forEach(targetSymbol.declarations, declaration => {
                // checkTypeNameIsReserved will have added better diagnostics for type declarations.
                if (!isTypeDeclaration(declaration)) {
                    diagnostics.add(createDiagnosticForNode(declaration, Diagnostics.Declaration_name_conflicts_with_built_in_global_identifier_0, unescapeLeadingUnderscores(name)));
                }
            });
        }
        else {
            globals.set(name, undefinedSymbol);
        }
    }

    function getSymbolLinks(symbol: Symbol): SymbolLinks {
        if (symbol.flags & SymbolFlags.Transient) return (symbol as TransientSymbol).links;
        const id = getSymbolId(symbol);
        return symbolLinks[id] ??= new SymbolLinks();
    }

    function getNodeLinks(node: Node): NodeLinks {
        const nodeId = getNodeId(node);
        return nodeLinks[nodeId] || (nodeLinks[nodeId] = new (NodeLinks as any)());
    }

    function getSymbol(symbols: SymbolTable, name: __String, meaning: SymbolFlags): Symbol | undefined {
        if (meaning) {
            const symbol = getMergedSymbol(symbols.get(name));
            if (symbol) {
                if (symbol.flags & meaning) {
                    return symbol;
                }
                if (symbol.flags & SymbolFlags.Alias) {
                    const targetFlags = getSymbolFlags(symbol);
                    // `targetFlags` will be `SymbolFlags.All` if an error occurred in alias resolution; this avoids cascading errors
                    if (targetFlags & meaning) {
                        return symbol;
                    }
                }
            }
        }
        // return undefined if we can't find a symbol.
    }

    /**
     * Get symbols that represent parameter-property-declaration as parameter and as property declaration
     * @param parameter a parameterDeclaration node
     * @param parameterName a name of the parameter to get the symbols for.
     * @return a tuple of two symbols
     */
    function getSymbolsOfParameterPropertyDeclaration(parameter: ParameterPropertyDeclaration, parameterName: __String): [Symbol, Symbol] {
        const constructorDeclaration = parameter.parent;
        const classDeclaration = parameter.parent.parent;

        const parameterSymbol = getSymbol(constructorDeclaration.locals!, parameterName, SymbolFlags.Value);
        const propertySymbol = getSymbol(getMembersOfSymbol(classDeclaration.symbol), parameterName, SymbolFlags.Value);

        if (parameterSymbol && propertySymbol) {
            return [parameterSymbol, propertySymbol];
        }

        return Debug.fail("There should exist two symbols, one as property declaration and one as parameter declaration");
    }

    function isBlockScopedNameDeclaredBeforeUse(declaration: Declaration, usage: Node): boolean {
        const declarationFile = getSourceFileOfNode(declaration);
        const useFile = getSourceFileOfNode(usage);
        const declContainer = getEnclosingBlockScopeContainer(declaration);
        if (declarationFile !== useFile) {
            if (
                (moduleKind && (declarationFile.externalModuleIndicator || useFile.externalModuleIndicator)) ||
                (!compilerOptions.outFile) ||
                isInTypeQuery(usage) ||
                declaration.flags & NodeFlags.Ambient
            ) {
                // nodes are in different files and order cannot be determined
                return true;
            }
            // declaration is after usage
            // can be legal if usage is deferred (i.e. inside function or in initializer of instance property)
            if (isUsedInFunctionOrInstanceProperty(usage, declaration)) {
                return true;
            }
            const sourceFiles = host.getSourceFiles();
            return sourceFiles.indexOf(declarationFile) <= sourceFiles.indexOf(useFile);
        }

        // deferred usage in a type context is always OK regardless of the usage position:
        if (!!(usage.flags & NodeFlags.JSDoc) || isInTypeQuery(usage) || isInAmbientOrTypeNode(usage)) {
            return true;
        }

        if (declaration.pos <= usage.pos && !(isPropertyDeclaration(declaration) && isThisProperty(usage.parent) && !declaration.initializer && !declaration.exclamationToken)) {
            // declaration is before usage
            if (declaration.kind === SyntaxKind.BindingElement) {
                // still might be illegal if declaration and usage are both binding elements (eg var [a = b, b = b] = [1, 2])
                const errorBindingElement = getAncestor(usage, SyntaxKind.BindingElement) as BindingElement;
                if (errorBindingElement) {
                    return findAncestor(errorBindingElement, isBindingElement) !== findAncestor(declaration, isBindingElement) ||
                        declaration.pos < errorBindingElement.pos;
                }
                // or it might be illegal if usage happens before parent variable is declared (eg var [a] = a)
                return isBlockScopedNameDeclaredBeforeUse(getAncestor(declaration, SyntaxKind.VariableDeclaration) as Declaration, usage);
            }
            else if (declaration.kind === SyntaxKind.VariableDeclaration) {
                // still might be illegal if usage is in the initializer of the variable declaration (eg var a = a)
                return !isImmediatelyUsedInInitializerOfBlockScopedVariable(declaration as VariableDeclaration, usage);
            }
            else if (isClassLike(declaration)) {
                // still might be illegal if the usage is within a computed property name in the class (eg class A { static p = "a"; [A.p]() {} })
                // or when used within a decorator in the class (e.g. `@dec(A.x) class A { static x = "x" }`),
                // except when used in a function that is not an IIFE (e.g., `@dec(() => A.x) class A { ... }`)
                const container = findAncestor(usage, n =>
                    n === declaration ? "quit" :
                        isComputedPropertyName(n) ? n.parent.parent === declaration :
                        !legacyDecorators && isDecorator(n) && (n.parent === declaration ||
                            isMethodDeclaration(n.parent) && n.parent.parent === declaration ||
                            isGetOrSetAccessorDeclaration(n.parent) && n.parent.parent === declaration ||
                            isPropertyDeclaration(n.parent) && n.parent.parent === declaration ||
                            isParameter(n.parent) && n.parent.parent.parent === declaration));
                if (!container) {
                    return true;
                }
                if (!legacyDecorators && isDecorator(container)) {
                    return !!findAncestor(usage, n => n === container ? "quit" : isFunctionLike(n) && !getImmediatelyInvokedFunctionExpression(n));
                }
                return false;
            }
            else if (isPropertyDeclaration(declaration)) {
                // still might be illegal if a self-referencing property initializer (eg private x = this.x)
                return !isPropertyImmediatelyReferencedWithinDeclaration(declaration, usage, /*stopAtAnyPropertyDeclaration*/ false);
            }
            else if (isParameterPropertyDeclaration(declaration, declaration.parent)) {
                // foo = this.bar is illegal in emitStandardClassFields when bar is a parameter property
                return !(emitStandardClassFields
                    && getContainingClass(declaration) === getContainingClass(usage)
                    && isUsedInFunctionOrInstanceProperty(usage, declaration));
            }
            return true;
        }

        // declaration is after usage, but it can still be legal if usage is deferred:
        // 1. inside an export specifier
        // 2. inside a function
        // 3. inside an instance property initializer, a reference to a non-instance property
        //    (except when emitStandardClassFields: true and the reference is to a parameter property)
        // 4. inside a static property initializer, a reference to a static method in the same class
        // 5. inside a TS export= declaration (since we will move the export statement during emit to avoid TDZ)
        if (usage.parent.kind === SyntaxKind.ExportSpecifier || (usage.parent.kind === SyntaxKind.ExportAssignment && (usage.parent as ExportAssignment).isExportEquals)) {
            // export specifiers do not use the variable, they only make it available for use
            return true;
        }
        // When resolving symbols for exports, the `usage` location passed in can be the export site directly
        if (usage.kind === SyntaxKind.ExportAssignment && (usage as ExportAssignment).isExportEquals) {
            return true;
        }

        if (isUsedInFunctionOrInstanceProperty(usage, declaration)) {
            if (
                emitStandardClassFields
                && getContainingClass(declaration)
                && (isPropertyDeclaration(declaration) || isParameterPropertyDeclaration(declaration, declaration.parent))
            ) {
                return !isPropertyImmediatelyReferencedWithinDeclaration(declaration, usage, /*stopAtAnyPropertyDeclaration*/ true);
            }
            else {
                return true;
            }
        }
        return false;

        function isImmediatelyUsedInInitializerOfBlockScopedVariable(declaration: VariableDeclaration, usage: Node): boolean {
            switch (declaration.parent.parent.kind) {
                case SyntaxKind.VariableStatement:
                case SyntaxKind.ForStatement:
                case SyntaxKind.ForOfStatement:
                    // variable statement/for/for-of statement case,
                    // use site should not be inside variable declaration (initializer of declaration or binding element)
                    if (isSameScopeDescendentOf(usage, declaration, declContainer)) {
                        return true;
                    }
                    break;
            }

            // ForIn/ForOf case - use site should not be used in expression part
            const grandparent = declaration.parent.parent;
            return isForInOrOfStatement(grandparent) && isSameScopeDescendentOf(usage, grandparent.expression, declContainer);
        }

        function isUsedInFunctionOrInstanceProperty(usage: Node, declaration: Node) {
            return isUsedInFunctionOrInstancePropertyWorker(usage, declaration);
        }

        function isUsedInFunctionOrInstancePropertyWorker(usage: Node, declaration: Node): boolean {
            return !!findAncestor(usage, current => {
                if (current === declContainer) {
                    return "quit";
                }
                if (isFunctionLike(current)) {
                    return !getImmediatelyInvokedFunctionExpression(current);
                }
                if (isClassStaticBlockDeclaration(current)) {
                    return declaration.pos < usage.pos;
                }

                const propertyDeclaration = tryCast(current.parent, isPropertyDeclaration);
                if (propertyDeclaration) {
                    const initializerOfProperty = propertyDeclaration.initializer === current;
                    if (initializerOfProperty) {
                        if (isStatic(current.parent)) {
                            if (declaration.kind === SyntaxKind.MethodDeclaration) {
                                return true;
                            }
                            if (isPropertyDeclaration(declaration) && getContainingClass(usage) === getContainingClass(declaration)) {
                                const propName = declaration.name;
                                if (isIdentifier(propName) || isPrivateIdentifier(propName)) {
                                    const type = getTypeOfSymbol(getSymbolOfDeclaration(declaration));
                                    const staticBlocks = filter(declaration.parent.members, isClassStaticBlockDeclaration);
                                    if (isPropertyInitializedInStaticBlocks(propName, type, staticBlocks, declaration.parent.pos, current.pos)) {
                                        return true;
                                    }
                                }
                            }
                        }
                        else {
                            const isDeclarationInstanceProperty = declaration.kind === SyntaxKind.PropertyDeclaration && !isStatic(declaration);
                            if (!isDeclarationInstanceProperty || getContainingClass(usage) !== getContainingClass(declaration)) {
                                return true;
                            }
                        }
                    }
                }

                const decorator = tryCast(current.parent, isDecorator);
                if (decorator && decorator.expression === current) {
                    if (isParameter(decorator.parent)) {
                        return isUsedInFunctionOrInstancePropertyWorker(decorator.parent.parent.parent, declaration) ? true : "quit";
                    }
                    if (isMethodDeclaration(decorator.parent)) {
                        return isUsedInFunctionOrInstancePropertyWorker(decorator.parent.parent, declaration) ? true : "quit";
                    }
                }

                return false;
            });
        }

        /** stopAtAnyPropertyDeclaration is used for detecting ES-standard class field use-before-def errors */
        function isPropertyImmediatelyReferencedWithinDeclaration(declaration: PropertyDeclaration | ParameterPropertyDeclaration, usage: Node, stopAtAnyPropertyDeclaration: boolean) {
            // always legal if usage is after declaration
            if (usage.end > declaration.end) {
                return false;
            }

            // still might be legal if usage is deferred (e.g. x: any = () => this.x)
            // otherwise illegal if immediately referenced within the declaration (e.g. x: any = this.x)
            const ancestorChangingReferenceScope = findAncestor(usage, (node: Node) => {
                if (node === declaration) {
                    return "quit";
                }

                switch (node.kind) {
                    case SyntaxKind.ArrowFunction:
                        return true;
                    case SyntaxKind.PropertyDeclaration:
                        // even when stopping at any property declaration, they need to come from the same class
                        return stopAtAnyPropertyDeclaration &&
                                (isPropertyDeclaration(declaration) && node.parent === declaration.parent
                                    || isParameterPropertyDeclaration(declaration, declaration.parent) && node.parent === declaration.parent.parent)
                            ? "quit" : true;
                    case SyntaxKind.Block:
                        switch (node.parent.kind) {
                            case SyntaxKind.GetAccessor:
                            case SyntaxKind.MethodDeclaration:
                            case SyntaxKind.SetAccessor:
                                return true;
                            default:
                                return false;
                        }
                    default:
                        return false;
                }
            });

            return ancestorChangingReferenceScope === undefined;
        }
    }

    function getRequiresScopeChangeCache(node: FunctionLikeDeclaration) {
        return getNodeLinks(node).declarationRequiresScopeChange;
    }
    function setRequiresScopeChangeCache(node: FunctionLikeDeclaration, value: boolean) {
        getNodeLinks(node).declarationRequiresScopeChange = value;
    }
    // The invalid initializer error is needed in two situation:
    // 1. When result is undefined, after checking for a missing "this."
    // 2. When result is defined
    function checkAndReportErrorForInvalidInitializer(errorLocation: Node | undefined, name: __String, propertyWithInvalidInitializer: PropertyDeclaration, result: Symbol | undefined) {
        if (!emitStandardClassFields) {
            if (errorLocation && !result && checkAndReportErrorForMissingPrefix(errorLocation, name, name)) {
                return true;
            }
            // We have a match, but the reference occurred within a property initializer and the identifier also binds
            // to a local variable in the constructor where the code will be emitted. Note that this is actually allowed
            // with emitStandardClassFields because the scope semantics are different.
            error(
                errorLocation,
                errorLocation && propertyWithInvalidInitializer.type && textRangeContainsPositionInclusive(propertyWithInvalidInitializer.type, errorLocation.pos)
                    ? Diagnostics.Type_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor
                    : Diagnostics.Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor,
                declarationNameToString(propertyWithInvalidInitializer.name),
                diagnosticName(name),
            );
            return true;
        }
        return false;
    }
    function onFailedToResolveSymbol(
        errorLocation: Node | undefined,
        nameArg: __String | Identifier,
        meaning: SymbolFlags,
        nameNotFoundMessage: DiagnosticMessage,
    ) {
        const name = isString(nameArg) ? nameArg : (nameArg as Identifier).escapedText;
        addLazyDiagnostic(() => {
            if (
                !errorLocation ||
                errorLocation.parent.kind !== SyntaxKind.JSDocLink &&
                    !checkAndReportErrorForMissingPrefix(errorLocation, name, nameArg) &&
                    !checkAndReportErrorForExtendingInterface(errorLocation) &&
                    !checkAndReportErrorForUsingTypeAsNamespace(errorLocation, name, meaning) &&
                    !checkAndReportErrorForExportingPrimitiveType(errorLocation, name) &&
                    !checkAndReportErrorForUsingNamespaceAsTypeOrValue(errorLocation, name, meaning) &&
                    !checkAndReportErrorForUsingTypeAsValue(errorLocation, name, meaning) &&
                    !checkAndReportErrorForUsingValueAsType(errorLocation, name, meaning)
            ) {
                let suggestion: Symbol | undefined;
                let suggestedLib: string | undefined;
                // Report missing lib first
                if (nameArg) {
                    suggestedLib = getSuggestedLibForNonExistentName(nameArg);
                    if (suggestedLib) {
                        error(errorLocation, nameNotFoundMessage, diagnosticName(nameArg), suggestedLib);
                    }
                }
                // then spelling suggestions
                if (!suggestedLib && suggestionCount < maximumSuggestionCount) {
                    suggestion = getSuggestedSymbolForNonexistentSymbol(errorLocation, name, meaning);
                    const isGlobalScopeAugmentationDeclaration = suggestion?.valueDeclaration && isAmbientModule(suggestion.valueDeclaration) && isGlobalScopeAugmentation(suggestion.valueDeclaration);
                    if (isGlobalScopeAugmentationDeclaration) {
                        suggestion = undefined;
                    }
                    if (suggestion) {
                        const suggestionName = symbolToString(suggestion);
                        const isUncheckedJS = isUncheckedJSSuggestion(errorLocation, suggestion, /*excludeClasses*/ false);
                        const message = meaning === SymbolFlags.Namespace ||
                                nameArg && typeof nameArg !== "string" && nodeIsSynthesized(nameArg) ?
                            Diagnostics.Cannot_find_namespace_0_Did_you_mean_1
                            : isUncheckedJS ? Diagnostics.Could_not_find_name_0_Did_you_mean_1
                            : Diagnostics.Cannot_find_name_0_Did_you_mean_1;
                        const diagnostic = createError(errorLocation, message, diagnosticName(nameArg), suggestionName);
                        diagnostic.canonicalHead = getCanonicalDiagnostic(nameNotFoundMessage, diagnosticName(nameArg));
                        addErrorOrSuggestion(!isUncheckedJS, diagnostic);
                        if (suggestion.valueDeclaration) {
                            addRelatedInfo(
                                diagnostic,
                                createDiagnosticForNode(suggestion.valueDeclaration, Diagnostics._0_is_declared_here, suggestionName),
                            );
                        }
                    }
                }
                // And then fall back to unspecified "not found"
                if (!suggestion && !suggestedLib && nameArg) {
                    error(errorLocation, nameNotFoundMessage, diagnosticName(nameArg));
                }
                suggestionCount++;
            }
        });
    }

    function onSuccessfullyResolvedSymbol(
        errorLocation: Node | undefined,
        result: Symbol,
        meaning: SymbolFlags,
        lastLocation: Node | undefined,
        associatedDeclarationForContainingInitializerOrBindingName: ParameterDeclaration | BindingElement | undefined,
        withinDeferredContext: boolean,
    ) {
        addLazyDiagnostic(() => {
            const name = result.escapedName;
            const isInExternalModule = lastLocation && isSourceFile(lastLocation) && isExternalOrCommonJsModule(lastLocation);
            // Only check for block-scoped variable if we have an error location and are looking for the
            // name with variable meaning
            //      For example,
            //          declare module foo {
            //              interface bar {}
            //          }
            //      const foo/*1*/: foo/*2*/.bar;
            // The foo at /*1*/ and /*2*/ will share same symbol with two meanings:
            // block-scoped variable and namespace module. However, only when we
            // try to resolve name in /*1*/ which is used in variable position,
            // we want to check for block-scoped
            if (
                errorLocation &&
                (meaning & SymbolFlags.BlockScopedVariable ||
                    ((meaning & SymbolFlags.Class || meaning & SymbolFlags.Enum) && (meaning & SymbolFlags.Value) === SymbolFlags.Value))
            ) {
                const exportOrLocalSymbol = getExportSymbolOfValueSymbolIfExported(result);
                if (exportOrLocalSymbol.flags & SymbolFlags.BlockScopedVariable || exportOrLocalSymbol.flags & SymbolFlags.Class || exportOrLocalSymbol.flags & SymbolFlags.Enum) {
                    checkResolvedBlockScopedVariable(exportOrLocalSymbol, errorLocation);
                }
            }

            // If we're in an external module, we can't reference value symbols created from UMD export declarations
            if (isInExternalModule && (meaning & SymbolFlags.Value) === SymbolFlags.Value && !(errorLocation!.flags & NodeFlags.JSDoc)) {
                const merged = getMergedSymbol(result);
                if (length(merged.declarations) && every(merged.declarations, d => isNamespaceExportDeclaration(d) || isSourceFile(d) && !!d.symbol.globalExports)) {
                    errorOrSuggestion(!compilerOptions.allowUmdGlobalAccess, errorLocation!, Diagnostics._0_refers_to_a_UMD_global_but_the_current_file_is_a_module_Consider_adding_an_import_instead, unescapeLeadingUnderscores(name));
                }
            }

            // If we're in a parameter initializer or binding name, we can't reference the values of the parameter whose initializer we're within or parameters to the right
            if (associatedDeclarationForContainingInitializerOrBindingName && !withinDeferredContext && (meaning & SymbolFlags.Value) === SymbolFlags.Value) {
                const candidate = getMergedSymbol(getLateBoundSymbol(result));
                const root = getRootDeclaration(associatedDeclarationForContainingInitializerOrBindingName) as ParameterDeclaration;
                // A parameter initializer or binding pattern initializer within a parameter cannot refer to itself
                if (candidate === getSymbolOfDeclaration(associatedDeclarationForContainingInitializerOrBindingName)) {
                    error(errorLocation, Diagnostics.Parameter_0_cannot_reference_itself, declarationNameToString(associatedDeclarationForContainingInitializerOrBindingName.name));
                }
                // And it cannot refer to any declarations which come after it
                else if (candidate.valueDeclaration && candidate.valueDeclaration.pos > associatedDeclarationForContainingInitializerOrBindingName.pos && root.parent.locals && getSymbol(root.parent.locals, candidate.escapedName, meaning) === candidate) {
                    error(errorLocation, Diagnostics.Parameter_0_cannot_reference_identifier_1_declared_after_it, declarationNameToString(associatedDeclarationForContainingInitializerOrBindingName.name), declarationNameToString(errorLocation as Identifier));
                }
            }
            if (errorLocation && meaning & SymbolFlags.Value && result.flags & SymbolFlags.Alias && !(result.flags & SymbolFlags.Value) && !isValidTypeOnlyAliasUseSite(errorLocation)) {
                const typeOnlyDeclaration = getTypeOnlyAliasDeclaration(result, SymbolFlags.Value);
                if (typeOnlyDeclaration) {
                    const message = typeOnlyDeclaration.kind === SyntaxKind.ExportSpecifier || typeOnlyDeclaration.kind === SyntaxKind.ExportDeclaration || typeOnlyDeclaration.kind === SyntaxKind.NamespaceExport
                        ? Diagnostics._0_cannot_be_used_as_a_value_because_it_was_exported_using_export_type
                        : Diagnostics._0_cannot_be_used_as_a_value_because_it_was_imported_using_import_type;
                    const unescapedName = unescapeLeadingUnderscores(name);
                    addTypeOnlyDeclarationRelatedInfo(
                        error(errorLocation, message, unescapedName),
                        typeOnlyDeclaration,
                        unescapedName,
                    );
                }
            }

            // Look at 'compilerOptions.isolatedModules' and not 'getIsolatedModules(...)' (which considers 'verbatimModuleSyntax')
            // here because 'verbatimModuleSyntax' will already have an error for importing a type without 'import type'.
            if (compilerOptions.isolatedModules && result && isInExternalModule && (meaning & SymbolFlags.Value) === SymbolFlags.Value) {
                const isGlobal = getSymbol(globals, name, meaning) === result;
                const nonValueSymbol = isGlobal && isSourceFile(lastLocation) && lastLocation.locals && getSymbol(lastLocation.locals, name, ~SymbolFlags.Value);
                if (nonValueSymbol) {
                    const importDecl = nonValueSymbol.declarations?.find(d => d.kind === SyntaxKind.ImportSpecifier || d.kind === SyntaxKind.ImportClause || d.kind === SyntaxKind.NamespaceImport || d.kind === SyntaxKind.ImportEqualsDeclaration);
                    if (importDecl && !isTypeOnlyImportDeclaration(importDecl)) {
                        error(importDecl, Diagnostics.Import_0_conflicts_with_global_value_used_in_this_file_so_must_be_declared_with_a_type_only_import_when_isolatedModules_is_enabled, unescapeLeadingUnderscores(name));
                    }
                }
            }
        });
    }

    function addTypeOnlyDeclarationRelatedInfo(diagnostic: Diagnostic, typeOnlyDeclaration: TypeOnlyCompatibleAliasDeclaration | undefined, unescapedName: string) {
        if (!typeOnlyDeclaration) return diagnostic;
        return addRelatedInfo(
            diagnostic,
            createDiagnosticForNode(
                typeOnlyDeclaration,
                typeOnlyDeclaration.kind === SyntaxKind.ExportSpecifier || typeOnlyDeclaration.kind === SyntaxKind.ExportDeclaration || typeOnlyDeclaration.kind === SyntaxKind.NamespaceExport
                    ? Diagnostics._0_was_exported_here
                    : Diagnostics._0_was_imported_here,
                unescapedName,
            ),
        );
    }

    function diagnosticName(nameArg: __String | Identifier | PrivateIdentifier) {
        return isString(nameArg) ? unescapeLeadingUnderscores(nameArg as __String) : declarationNameToString(nameArg as Identifier);
    }

    function checkAndReportErrorForMissingPrefix(errorLocation: Node, name: __String, nameArg: __String | Identifier): boolean {
        if (!isIdentifier(errorLocation) || errorLocation.escapedText !== name || isTypeReferenceIdentifier(errorLocation) || isInTypeQuery(errorLocation)) {
            return false;
        }

        const container = getThisContainer(errorLocation, /*includeArrowFunctions*/ false, /*includeClassComputedPropertyName*/ false);
        let location: Node = container;
        while (location) {
            if (isClassLike(location.parent)) {
                const classSymbol = getSymbolOfDeclaration(location.parent);
                if (!classSymbol) {
                    break;
                }

                // Check to see if a static member exists.
                const constructorType = getTypeOfSymbol(classSymbol);
                if (getPropertyOfType(constructorType, name)) {
                    error(errorLocation, Diagnostics.Cannot_find_name_0_Did_you_mean_the_static_member_1_0, diagnosticName(nameArg), symbolToString(classSymbol));
                    return true;
                }

                // No static member is present.
                // Check if we're in an instance method and look for a relevant instance member.
                if (location === container && !isStatic(location)) {
                    const instanceType = (getDeclaredTypeOfSymbol(classSymbol) as InterfaceType).thisType!; // TODO: GH#18217
                    if (getPropertyOfType(instanceType, name)) {
                        error(errorLocation, Diagnostics.Cannot_find_name_0_Did_you_mean_the_instance_member_this_0, diagnosticName(nameArg));
                        return true;
                    }
                }
            }

            location = location.parent;
        }
        return false;
    }

    function checkAndReportErrorForExtendingInterface(errorLocation: Node): boolean {
        const expression = getEntityNameForExtendingInterface(errorLocation);
        if (expression && resolveEntityName(expression, SymbolFlags.Interface, /*ignoreErrors*/ true)) {
            error(errorLocation, Diagnostics.Cannot_extend_an_interface_0_Did_you_mean_implements, getTextOfNode(expression));
            return true;
        }
        return false;
    }
    /**
     * Climbs up parents to an ExpressionWithTypeArguments, and returns its expression,
     * but returns undefined if that expression is not an EntityNameExpression.
     */
    function getEntityNameForExtendingInterface(node: Node): EntityNameExpression | undefined {
        switch (node.kind) {
            case SyntaxKind.Identifier:
            case SyntaxKind.PropertyAccessExpression:
                return node.parent ? getEntityNameForExtendingInterface(node.parent) : undefined;
            case SyntaxKind.ExpressionWithTypeArguments:
                if (isEntityNameExpression((node as ExpressionWithTypeArguments).expression)) {
                    return (node as ExpressionWithTypeArguments).expression as EntityNameExpression;
                }
                // falls through
            default:
                return undefined;
        }
    }

    function checkAndReportErrorForUsingTypeAsNamespace(errorLocation: Node, name: __String, meaning: SymbolFlags): boolean {
        const namespaceMeaning = SymbolFlags.Namespace | (isInJSFile(errorLocation) ? SymbolFlags.Value : 0);
        if (meaning === namespaceMeaning) {
            const symbol = resolveSymbol(resolveName(errorLocation, name, SymbolFlags.Type & ~namespaceMeaning, /*nameNotFoundMessage*/ undefined, /*isUse*/ false));
            const parent = errorLocation.parent;
            if (symbol) {
                if (isQualifiedName(parent)) {
                    Debug.assert(parent.left === errorLocation, "Should only be resolving left side of qualified name as a namespace");
                    const propName = parent.right.escapedText;
                    const propType = getPropertyOfType(getDeclaredTypeOfSymbol(symbol), propName);
                    if (propType) {
                        error(
                            parent,
                            Diagnostics.Cannot_access_0_1_because_0_is_a_type_but_not_a_namespace_Did_you_mean_to_retrieve_the_type_of_the_property_1_in_0_with_0_1,
                            unescapeLeadingUnderscores(name),
                            unescapeLeadingUnderscores(propName),
                        );
                        return true;
                    }
                }
                error(errorLocation, Diagnostics._0_only_refers_to_a_type_but_is_being_used_as_a_namespace_here, unescapeLeadingUnderscores(name));
                return true;
            }
        }

        return false;
    }

    function checkAndReportErrorForUsingValueAsType(errorLocation: Node, name: __String, meaning: SymbolFlags): boolean {
        if (meaning & (SymbolFlags.Type & ~SymbolFlags.Namespace)) {
            const symbol = resolveSymbol(resolveName(errorLocation, name, ~SymbolFlags.Type & SymbolFlags.Value, /*nameNotFoundMessage*/ undefined, /*isUse*/ false));
            if (symbol && !(symbol.flags & SymbolFlags.Namespace)) {
                error(errorLocation, Diagnostics._0_refers_to_a_value_but_is_being_used_as_a_type_here_Did_you_mean_typeof_0, unescapeLeadingUnderscores(name));
                return true;
            }
        }
        return false;
    }

    function isPrimitiveTypeName(name: __String) {
        return name === "any" || name === "string" || name === "number" || name === "boolean" || name === "never" || name === "unknown";
    }

    function checkAndReportErrorForExportingPrimitiveType(errorLocation: Node, name: __String): boolean {
        if (isPrimitiveTypeName(name) && errorLocation.parent.kind === SyntaxKind.ExportSpecifier) {
            error(errorLocation, Diagnostics.Cannot_export_0_Only_local_declarations_can_be_exported_from_a_module, name as string);
            return true;
        }
        return false;
    }

    function checkAndReportErrorForUsingTypeAsValue(errorLocation: Node, name: __String, meaning: SymbolFlags): boolean {
        if (meaning & SymbolFlags.Value) {
            if (isPrimitiveTypeName(name)) {
                const grandparent = errorLocation.parent.parent;
                if (grandparent && grandparent.parent && isHeritageClause(grandparent)) {
                    const heritageKind = grandparent.token;
                    const containerKind = grandparent.parent.kind;
                    if (containerKind === SyntaxKind.InterfaceDeclaration && heritageKind === SyntaxKind.ExtendsKeyword) {
                        error(errorLocation, Diagnostics.An_interface_cannot_extend_a_primitive_type_like_0_It_can_only_extend_other_named_object_types, unescapeLeadingUnderscores(name));
                    }
                    else if (isClassLike(grandparent.parent) && heritageKind === SyntaxKind.ExtendsKeyword) {
                        error(errorLocation, Diagnostics.A_class_cannot_extend_a_primitive_type_like_0_Classes_can_only_extend_constructable_values, unescapeLeadingUnderscores(name));
                    }
                    else if (isClassLike(grandparent.parent) && heritageKind === SyntaxKind.ImplementsKeyword) {
                        error(errorLocation, Diagnostics.A_class_cannot_implement_a_primitive_type_like_0_It_can_only_implement_other_named_object_types, unescapeLeadingUnderscores(name));
                    }
                }
                else {
                    error(errorLocation, Diagnostics._0_only_refers_to_a_type_but_is_being_used_as_a_value_here, unescapeLeadingUnderscores(name));
                }
                return true;
            }
            const symbol = resolveSymbol(resolveName(errorLocation, name, SymbolFlags.Type & ~SymbolFlags.Value, /*nameNotFoundMessage*/ undefined, /*isUse*/ false));
            const allFlags = symbol && getSymbolFlags(symbol);
            if (symbol && allFlags !== undefined && !(allFlags & SymbolFlags.Value)) {
                const rawName = unescapeLeadingUnderscores(name);
                if (isES2015OrLaterConstructorName(name)) {
                    error(errorLocation, Diagnostics._0_only_refers_to_a_type_but_is_being_used_as_a_value_here_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_es2015_or_later, rawName);
                }
                else if (maybeMappedType(errorLocation, symbol)) {
                    error(errorLocation, Diagnostics._0_only_refers_to_a_type_but_is_being_used_as_a_value_here_Did_you_mean_to_use_1_in_0, rawName, rawName === "K" ? "P" : "K");
                }
                else {
                    error(errorLocation, Diagnostics._0_only_refers_to_a_type_but_is_being_used_as_a_value_here, rawName);
                }
                return true;
            }
        }
        return false;
    }

    function maybeMappedType(node: Node, symbol: Symbol) {
        const container = findAncestor(node.parent, n => isComputedPropertyName(n) || isPropertySignature(n) ? false : isTypeLiteralNode(n) || "quit") as TypeLiteralNode | undefined;
        if (container && container.members.length === 1) {
            const type = getDeclaredTypeOfSymbol(symbol);
            return !!(type.flags & TypeFlags.Union) && allTypesAssignableToKind(type, TypeFlags.StringOrNumberLiteral, /*strict*/ true);
        }
        return false;
    }

    function isES2015OrLaterConstructorName(n: __String) {
        switch (n) {
            case "Promise":
            case "Symbol":
            case "Map":
            case "WeakMap":
            case "Set":
            case "WeakSet":
                return true;
        }
        return false;
    }

    function checkAndReportErrorForUsingNamespaceAsTypeOrValue(errorLocation: Node, name: __String, meaning: SymbolFlags): boolean {
        if (meaning & (SymbolFlags.Value & ~SymbolFlags.Type)) {
            const symbol = resolveSymbol(resolveName(errorLocation, name, SymbolFlags.NamespaceModule, /*nameNotFoundMessage*/ undefined, /*isUse*/ false));
            if (symbol) {
                error(
                    errorLocation,
                    Diagnostics.Cannot_use_namespace_0_as_a_value,
                    unescapeLeadingUnderscores(name),
                );
                return true;
            }
        }
        else if (meaning & (SymbolFlags.Type & ~SymbolFlags.Value)) {
            const symbol = resolveSymbol(resolveName(errorLocation, name, SymbolFlags.Module, /*nameNotFoundMessage*/ undefined, /*isUse*/ false));
            if (symbol) {
                error(errorLocation, Diagnostics.Cannot_use_namespace_0_as_a_type, unescapeLeadingUnderscores(name));
                return true;
            }
        }
        return false;
    }

    function checkResolvedBlockScopedVariable(result: Symbol, errorLocation: Node): void {
        Debug.assert(!!(result.flags & SymbolFlags.BlockScopedVariable || result.flags & SymbolFlags.Class || result.flags & SymbolFlags.Enum));
        if (result.flags & (SymbolFlags.Function | SymbolFlags.FunctionScopedVariable | SymbolFlags.Assignment) && result.flags & SymbolFlags.Class) {
            // constructor functions aren't block scoped
            return;
        }
        // Block-scoped variables cannot be used before their definition
        const declaration = result.declarations?.find(
            d => isBlockOrCatchScoped(d) || isClassLike(d) || (d.kind === SyntaxKind.EnumDeclaration),
        );

        if (declaration === undefined) return Debug.fail("checkResolvedBlockScopedVariable could not find block-scoped declaration");

        if (!(declaration.flags & NodeFlags.Ambient) && !isBlockScopedNameDeclaredBeforeUse(declaration, errorLocation)) {
            let diagnosticMessage;
            const declarationName = declarationNameToString(getNameOfDeclaration(declaration));
            if (result.flags & SymbolFlags.BlockScopedVariable) {
                diagnosticMessage = error(errorLocation, Diagnostics.Block_scoped_variable_0_used_before_its_declaration, declarationName);
            }
            else if (result.flags & SymbolFlags.Class) {
                diagnosticMessage = error(errorLocation, Diagnostics.Class_0_used_before_its_declaration, declarationName);
            }
            else if (result.flags & SymbolFlags.RegularEnum) {
                diagnosticMessage = error(errorLocation, Diagnostics.Enum_0_used_before_its_declaration, declarationName);
            }
            else {
                Debug.assert(!!(result.flags & SymbolFlags.ConstEnum));
                if (getIsolatedModules(compilerOptions)) {
                    diagnosticMessage = error(errorLocation, Diagnostics.Enum_0_used_before_its_declaration, declarationName);
                }
            }

            if (diagnosticMessage) {
                addRelatedInfo(diagnosticMessage, createDiagnosticForNode(declaration, Diagnostics._0_is_declared_here, declarationName));
            }
        }
    }

    /* Starting from 'initial' node walk up the parent chain until 'stopAt' node is reached.
     * If at any point current node is equal to 'parent' node - return true.
     * If current node is an IIFE, continue walking up.
     * Return false if 'stopAt' node is reached or isFunctionLike(current) === true.
     */
    function isSameScopeDescendentOf(initial: Node, parent: Node | undefined, stopAt: Node): boolean {
        return !!parent && !!findAncestor(initial, n =>
            n === parent
            || (n === stopAt || isFunctionLike(n) && (!getImmediatelyInvokedFunctionExpression(n) || (getFunctionFlags(n) & FunctionFlags.AsyncGenerator)) ? "quit" : false));
    }

    function getAnyImportSyntax(node: Node): AnyImportOrJsDocImport | undefined {
        switch (node.kind) {
            case SyntaxKind.ImportEqualsDeclaration:
                return node as ImportEqualsDeclaration;
            case SyntaxKind.ImportClause:
                return (node as ImportClause).parent;
            case SyntaxKind.NamespaceImport:
                return (node as NamespaceImport).parent.parent;
            case SyntaxKind.ImportSpecifier:
                return (node as ImportSpecifier).parent.parent.parent;
            default:
                return undefined;
        }
    }

    function getDeclarationOfAliasSymbol(symbol: Symbol): Declaration | undefined {
        return symbol.declarations && findLast<Declaration>(symbol.declarations, isAliasSymbolDeclaration);
    }

    /**
     * An alias symbol is created by one of the following declarations:
     * import <symbol> = ...
     * import <symbol> from ...
     * import * as <symbol> from ...
     * import { x as <symbol> } from ...
     * export { x as <symbol> } from ...
     * export * as ns <symbol> from ...
     * export = <EntityNameExpression>
     * export default <EntityNameExpression>
     * module.exports = <EntityNameExpression>
     * {<Identifier>}
     * {name: <EntityNameExpression>}
     * const { x } = require ...
     */
    function isAliasSymbolDeclaration(node: Node): boolean {
        return node.kind === SyntaxKind.ImportEqualsDeclaration
            || node.kind === SyntaxKind.NamespaceExportDeclaration
            || node.kind === SyntaxKind.ImportClause && !!(node as ImportClause).name
            || node.kind === SyntaxKind.NamespaceImport
            || node.kind === SyntaxKind.NamespaceExport
            || node.kind === SyntaxKind.ImportSpecifier
            || node.kind === SyntaxKind.ExportSpecifier
            || node.kind === SyntaxKind.ExportAssignment && exportAssignmentIsAlias(node as ExportAssignment)
            || isBinaryExpression(node) && getAssignmentDeclarationKind(node) === AssignmentDeclarationKind.ModuleExports && exportAssignmentIsAlias(node)
            || isAccessExpression(node)
                && isBinaryExpression(node.parent)
                && node.parent.left === node
                && node.parent.operatorToken.kind === SyntaxKind.EqualsToken
                && isAliasableOrJsExpression(node.parent.right)
            || node.kind === SyntaxKind.ShorthandPropertyAssignment
            || node.kind === SyntaxKind.PropertyAssignment && isAliasableOrJsExpression((node as PropertyAssignment).initializer)
            || node.kind === SyntaxKind.VariableDeclaration && isVariableDeclarationInitializedToBareOrAccessedRequire(node)
            || node.kind === SyntaxKind.BindingElement && isVariableDeclarationInitializedToBareOrAccessedRequire(node.parent.parent);
    }

    function isAliasableOrJsExpression(e: Expression) {
        return isAliasableExpression(e) || isFunctionExpression(e) && isJSConstructor(e);
    }

    function getTargetOfImportEqualsDeclaration(node: ImportEqualsDeclaration | VariableDeclaration, dontResolveAlias: boolean): Symbol | undefined {
        const commonJSPropertyAccess = getCommonJSPropertyAccess(node);
        if (commonJSPropertyAccess) {
            const name = (getLeftmostAccessExpression(commonJSPropertyAccess.expression) as CallExpression).arguments[0] as StringLiteral;
            return isIdentifier(commonJSPropertyAccess.name)
                ? resolveSymbol(getPropertyOfType(resolveExternalModuleTypeByLiteral(name), commonJSPropertyAccess.name.escapedText))
                : undefined;
        }
        if (isVariableDeclaration(node) || node.moduleReference.kind === SyntaxKind.ExternalModuleReference) {
            const immediate = resolveExternalModuleName(
                node,
                getExternalModuleRequireArgument(node) || getExternalModuleImportEqualsDeclarationExpression(node),
            );
            const resolved = resolveExternalModuleSymbol(immediate);
            if (resolved && ModuleKind.Node20 <= moduleKind && moduleKind <= ModuleKind.NodeNext) {
                const moduleExports = getExportOfModule(resolved, "module.exports" as __String, node, dontResolveAlias);
                if (moduleExports) {
                    return moduleExports;
                }
            }
            markSymbolOfAliasDeclarationIfTypeOnly(node, immediate, resolved, /*overwriteEmpty*/ false);
            return resolved;
        }
        const resolved = getSymbolOfPartOfRightHandSideOfImportEquals(node.moduleReference, dontResolveAlias);
        checkAndReportErrorForResolvingImportAliasToTypeOnlySymbol(node, resolved);
        return resolved;
    }

    function checkAndReportErrorForResolvingImportAliasToTypeOnlySymbol(node: ImportEqualsDeclaration, resolved: Symbol | undefined) {
        if (markSymbolOfAliasDeclarationIfTypeOnly(node, /*immediateTarget*/ undefined, resolved, /*overwriteEmpty*/ false) && !node.isTypeOnly) {
            const typeOnlyDeclaration = getTypeOnlyAliasDeclaration(getSymbolOfDeclaration(node))!;
            const isExport = typeOnlyDeclaration.kind === SyntaxKind.ExportSpecifier || typeOnlyDeclaration.kind === SyntaxKind.ExportDeclaration;
            const message = isExport
                ? Diagnostics.An_import_alias_cannot_reference_a_declaration_that_was_exported_using_export_type
                : Diagnostics.An_import_alias_cannot_reference_a_declaration_that_was_imported_using_import_type;
            const relatedMessage = isExport
                ? Diagnostics._0_was_exported_here
                : Diagnostics._0_was_imported_here;

            // TODO: how to get name for export *?
            const name = typeOnlyDeclaration.kind === SyntaxKind.ExportDeclaration ? "*" : moduleExportNameTextUnescaped(typeOnlyDeclaration.name);
            addRelatedInfo(error(node.moduleReference, message), createDiagnosticForNode(typeOnlyDeclaration, relatedMessage, name));
        }
    }

    function resolveExportByName(moduleSymbol: Symbol, name: __String, sourceNode: TypeOnlyCompatibleAliasDeclaration | undefined, dontResolveAlias: boolean) {
        const exportValue = moduleSymbol.exports!.get(InternalSymbolName.ExportEquals);
        const exportSymbol = exportValue
            ? getPropertyOfType(getTypeOfSymbol(exportValue), name, /*skipObjectFunctionPropertyAugment*/ true)
            : moduleSymbol.exports!.get(name);
        const resolved = resolveSymbol(exportSymbol, dontResolveAlias);
        markSymbolOfAliasDeclarationIfTypeOnly(sourceNode, exportSymbol, resolved, /*overwriteEmpty*/ false);
        return resolved;
    }

    function isSyntacticDefault(node: Node) {
        return ((isExportAssignment(node) && !node.isExportEquals)
            || hasSyntacticModifier(node, ModifierFlags.Default)
            || isExportSpecifier(node)
            || isNamespaceExport(node));
    }

    function getEmitSyntaxForModuleSpecifierExpression(usage: Expression) {
        return isStringLiteralLike(usage) ? host.getEmitSyntaxForUsageLocation(getSourceFileOfNode(usage), usage) : undefined;
    }

    function isESMFormatImportImportingCommonjsFormatFile(usageMode: ResolutionMode, targetMode: ResolutionMode) {
        return usageMode === ModuleKind.ESNext && targetMode === ModuleKind.CommonJS;
    }

    function isOnlyImportableAsDefault(usage: Expression, resolvedModule?: Symbol) {
        // In Node.js, JSON modules don't get named exports
        if (ModuleKind.Node16 <= moduleKind && moduleKind <= ModuleKind.NodeNext) {
            const usageMode = getEmitSyntaxForModuleSpecifierExpression(usage);
            if (usageMode === ModuleKind.ESNext) {
                resolvedModule ??= resolveExternalModuleName(usage, usage, /*ignoreErrors*/ true);
                const targetFile = resolvedModule && getSourceFileOfModule(resolvedModule);
                return targetFile && (isJsonSourceFile(targetFile) || getDeclarationFileExtension(targetFile.fileName) === ".d.json.ts");
            }
        }
        return false;
    }

    function canHaveSyntheticDefault(file: SourceFile | undefined, moduleSymbol: Symbol, dontResolveAlias: boolean, usage: Expression) {
        const usageMode = file && getEmitSyntaxForModuleSpecifierExpression(usage);
        if (file && usageMode !== undefined) {
            const targetMode = host.getImpliedNodeFormatForEmit(file);
            if (usageMode === ModuleKind.ESNext && targetMode === ModuleKind.CommonJS && ModuleKind.Node16 <= moduleKind && moduleKind <= ModuleKind.NodeNext) {
                // In Node.js, CommonJS modules always have a synthetic default when imported into ESM
                return true;
            }
            if (usageMode === ModuleKind.ESNext && targetMode === ModuleKind.ESNext) {
                // No matter what the `module` setting is, if we're confident that both files
                // are ESM, there cannot be a synthetic default.
                return false;
            }
            // For other files (not node16/nodenext with impliedNodeFormat), check if we can determine
            // the module format from project references
            if (!targetMode && file.isDeclarationFile) {
                // Try to get the project reference - try both source file mapping and output file mapping
                // since declaration files can be mapped either way depending on how they're resolved
                const redirect = host.getRedirectFromSourceFile(file.path) || host.getRedirectFromOutput(file.path);
                if (redirect) {
                    // This is a declaration file from a project reference, so we can determine
                    // its module format from the referenced project's options
                    const targetModuleKind = host.getEmitModuleFormatOfFile(file);
                    if (usageMode === ModuleKind.ESNext && ModuleKind.ES2015 <= targetModuleKind && targetModuleKind <= ModuleKind.ESNext) {
                        return false;
                    }
                }
            }
        }
        if (!allowSyntheticDefaultImports) {
            return false;
        }
        // Declaration files (and ambient modules)
        if (!file || file.isDeclarationFile) {
            // Definitely cannot have a synthetic default if they have a syntactic default member specified
            const defaultExportSymbol = resolveExportByName(moduleSymbol, InternalSymbolName.Default, /*sourceNode*/ undefined, /*dontResolveAlias*/ true); // Dont resolve alias because we want the immediately exported symbol's declaration
            if (defaultExportSymbol && some(defaultExportSymbol.declarations, isSyntacticDefault)) {
                return false;
            }
            // It _might_ still be incorrect to assume there is no __esModule marker on the import at runtime, even if there is no `default` member
            // So we check a bit more,
            if (resolveExportByName(moduleSymbol, escapeLeadingUnderscores("__esModule"), /*sourceNode*/ undefined, dontResolveAlias)) {
                // If there is an `__esModule` specified in the declaration (meaning someone explicitly added it or wrote it in their code),
                // it definitely is a module and does not have a synthetic default
                return false;
            }
            // There are _many_ declaration files not written with esmodules in mind that still get compiled into a format with __esModule set
            // Meaning there may be no default at runtime - however to be on the permissive side, we allow access to a synthetic default member
            // as there is no marker to indicate if the accompanying JS has `__esModule` or not, or is even native esm
            return true;
        }
        // TypeScript files never have a synthetic default (as they are always emitted with an __esModule marker) _unless_ they contain an export= statement
        if (!isSourceFileJS(file)) {
            return hasExportAssignmentSymbol(moduleSymbol);
        }
        // JS files have a synthetic default if they do not contain ES2015+ module syntax (export = is not valid in js) _and_ d