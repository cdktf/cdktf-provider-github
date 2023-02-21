# `branchProtection` Submodule <a name="`branchProtection` Submodule" id="@cdktf/provider-github.branchProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BranchProtection <a name="BranchProtection" id="@cdktf/provider-github.branchProtection.BranchProtection"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/branch_protection github_branch_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtection(Construct Scope, string Id, BranchProtectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig">BranchProtectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig">BranchProtectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.putRequiredPullRequestReviews">PutRequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.putRequiredStatusChecks">PutRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetAllowsDeletions">ResetAllowsDeletions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetAllowsForcePushes">ResetAllowsForcePushes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetBlocksCreations">ResetBlocksCreations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetEnforceAdmins">ResetEnforceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetLockBranch">ResetLockBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetPushRestrictions">ResetPushRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetRequireConversationResolution">ResetRequireConversationResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredLinearHistory">ResetRequiredLinearHistory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredPullRequestReviews">ResetRequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredStatusChecks">ResetRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.resetRequireSignedCommits">ResetRequireSignedCommits</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtection.BranchProtection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.branchProtection.BranchProtection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.branchProtection.BranchProtection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.branchProtection.BranchProtection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.branchProtection.BranchProtection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.branchProtection.BranchProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.branchProtection.BranchProtection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.branchProtection.BranchProtection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.branchProtection.BranchProtection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRequiredPullRequestReviews` <a name="PutRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtection.putRequiredPullRequestReviews"></a>

```csharp
private void PutRequiredPullRequestReviews(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.branchProtection.BranchProtection.putRequiredPullRequestReviews.parameter.value"></a>

- *Type:* object

---

##### `PutRequiredStatusChecks` <a name="PutRequiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtection.putRequiredStatusChecks"></a>

```csharp
private void PutRequiredStatusChecks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.branchProtection.BranchProtection.putRequiredStatusChecks.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowsDeletions` <a name="ResetAllowsDeletions" id="@cdktf/provider-github.branchProtection.BranchProtection.resetAllowsDeletions"></a>

```csharp
private void ResetAllowsDeletions()
```

##### `ResetAllowsForcePushes` <a name="ResetAllowsForcePushes" id="@cdktf/provider-github.branchProtection.BranchProtection.resetAllowsForcePushes"></a>

```csharp
private void ResetAllowsForcePushes()
```

##### `ResetBlocksCreations` <a name="ResetBlocksCreations" id="@cdktf/provider-github.branchProtection.BranchProtection.resetBlocksCreations"></a>

```csharp
private void ResetBlocksCreations()
```

##### `ResetEnforceAdmins` <a name="ResetEnforceAdmins" id="@cdktf/provider-github.branchProtection.BranchProtection.resetEnforceAdmins"></a>

```csharp
private void ResetEnforceAdmins()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.branchProtection.BranchProtection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLockBranch` <a name="ResetLockBranch" id="@cdktf/provider-github.branchProtection.BranchProtection.resetLockBranch"></a>

```csharp
private void ResetLockBranch()
```

##### `ResetPushRestrictions` <a name="ResetPushRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtection.resetPushRestrictions"></a>

```csharp
private void ResetPushRestrictions()
```

##### `ResetRequireConversationResolution` <a name="ResetRequireConversationResolution" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequireConversationResolution"></a>

```csharp
private void ResetRequireConversationResolution()
```

##### `ResetRequiredLinearHistory` <a name="ResetRequiredLinearHistory" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredLinearHistory"></a>

```csharp
private void ResetRequiredLinearHistory()
```

##### `ResetRequiredPullRequestReviews` <a name="ResetRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredPullRequestReviews"></a>

```csharp
private void ResetRequiredPullRequestReviews()
```

##### `ResetRequiredStatusChecks` <a name="ResetRequiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredStatusChecks"></a>

```csharp
private void ResetRequiredStatusChecks()
```

##### `ResetRequireSignedCommits` <a name="ResetRequireSignedCommits" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequireSignedCommits"></a>

```csharp
private void ResetRequireSignedCommits()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.branchProtection.BranchProtection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

BranchProtection.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.branchProtection.BranchProtection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.branchProtection.BranchProtection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

BranchProtection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.branchProtection.BranchProtection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.branchProtection.BranchProtection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

BranchProtection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.branchProtection.BranchProtection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviews">RequiredPullRequestReviews</a></code> | <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList">BranchProtectionRequiredPullRequestReviewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredStatusChecks">RequiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList">BranchProtectionRequiredStatusChecksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.allowsDeletionsInput">AllowsDeletionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.allowsForcePushesInput">AllowsForcePushesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.blocksCreationsInput">BlocksCreationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.enforceAdminsInput">EnforceAdminsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.lockBranchInput">LockBranchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.pushRestrictionsInput">PushRestrictionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requireConversationResolutionInput">RequireConversationResolutionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredLinearHistoryInput">RequiredLinearHistoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviewsInput">RequiredPullRequestReviewsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredStatusChecksInput">RequiredStatusChecksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requireSignedCommitsInput">RequireSignedCommitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.allowsDeletions">AllowsDeletions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.allowsForcePushes">AllowsForcePushes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.blocksCreations">BlocksCreations</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.enforceAdmins">EnforceAdmins</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.lockBranch">LockBranch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.pushRestrictions">PushRestrictions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requireConversationResolution">RequireConversationResolution</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredLinearHistory">RequiredLinearHistory</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requireSignedCommits">RequireSignedCommits</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.branchProtection.BranchProtection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.branchProtection.BranchProtection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtection.BranchProtection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.branchProtection.BranchProtection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.branchProtection.BranchProtection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.branchProtection.BranchProtection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.branchProtection.BranchProtection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.branchProtection.BranchProtection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.branchProtection.BranchProtection.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.branchProtection.BranchProtection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.branchProtection.BranchProtection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.branchProtection.BranchProtection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.branchProtection.BranchProtection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.branchProtection.BranchProtection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `RequiredPullRequestReviews`<sup>Required</sup> <a name="RequiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviews"></a>

```csharp
public BranchProtectionRequiredPullRequestReviewsList RequiredPullRequestReviews { get; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList">BranchProtectionRequiredPullRequestReviewsList</a>

---

##### `RequiredStatusChecks`<sup>Required</sup> <a name="RequiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredStatusChecks"></a>

```csharp
public BranchProtectionRequiredStatusChecksList RequiredStatusChecks { get; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList">BranchProtectionRequiredStatusChecksList</a>

---

##### `AllowsDeletionsInput`<sup>Optional</sup> <a name="AllowsDeletionsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.allowsDeletionsInput"></a>

```csharp
public object AllowsDeletionsInput { get; }
```

- *Type:* object

---

##### `AllowsForcePushesInput`<sup>Optional</sup> <a name="AllowsForcePushesInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.allowsForcePushesInput"></a>

```csharp
public object AllowsForcePushesInput { get; }
```

- *Type:* object

---

##### `BlocksCreationsInput`<sup>Optional</sup> <a name="BlocksCreationsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.blocksCreationsInput"></a>

```csharp
public object BlocksCreationsInput { get; }
```

- *Type:* object

---

##### `EnforceAdminsInput`<sup>Optional</sup> <a name="EnforceAdminsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.enforceAdminsInput"></a>

```csharp
public object EnforceAdminsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LockBranchInput`<sup>Optional</sup> <a name="LockBranchInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.lockBranchInput"></a>

```csharp
public object LockBranchInput { get; }
```

- *Type:* object

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `PushRestrictionsInput`<sup>Optional</sup> <a name="PushRestrictionsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.pushRestrictionsInput"></a>

```csharp
public string[] PushRestrictionsInput { get; }
```

- *Type:* string[]

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `RequireConversationResolutionInput`<sup>Optional</sup> <a name="RequireConversationResolutionInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requireConversationResolutionInput"></a>

```csharp
public object RequireConversationResolutionInput { get; }
```

- *Type:* object

---

##### `RequiredLinearHistoryInput`<sup>Optional</sup> <a name="RequiredLinearHistoryInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredLinearHistoryInput"></a>

```csharp
public object RequiredLinearHistoryInput { get; }
```

- *Type:* object

---

##### `RequiredPullRequestReviewsInput`<sup>Optional</sup> <a name="RequiredPullRequestReviewsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviewsInput"></a>

```csharp
public object RequiredPullRequestReviewsInput { get; }
```

- *Type:* object

---

##### `RequiredStatusChecksInput`<sup>Optional</sup> <a name="RequiredStatusChecksInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredStatusChecksInput"></a>

```csharp
public object RequiredStatusChecksInput { get; }
```

- *Type:* object

---

##### `RequireSignedCommitsInput`<sup>Optional</sup> <a name="RequireSignedCommitsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requireSignedCommitsInput"></a>

```csharp
public object RequireSignedCommitsInput { get; }
```

- *Type:* object

---

##### `AllowsDeletions`<sup>Required</sup> <a name="AllowsDeletions" id="@cdktf/provider-github.branchProtection.BranchProtection.property.allowsDeletions"></a>

```csharp
public object AllowsDeletions { get; }
```

- *Type:* object

---

##### `AllowsForcePushes`<sup>Required</sup> <a name="AllowsForcePushes" id="@cdktf/provider-github.branchProtection.BranchProtection.property.allowsForcePushes"></a>

```csharp
public object AllowsForcePushes { get; }
```

- *Type:* object

---

##### `BlocksCreations`<sup>Required</sup> <a name="BlocksCreations" id="@cdktf/provider-github.branchProtection.BranchProtection.property.blocksCreations"></a>

```csharp
public object BlocksCreations { get; }
```

- *Type:* object

---

##### `EnforceAdmins`<sup>Required</sup> <a name="EnforceAdmins" id="@cdktf/provider-github.branchProtection.BranchProtection.property.enforceAdmins"></a>

```csharp
public object EnforceAdmins { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.branchProtection.BranchProtection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LockBranch`<sup>Required</sup> <a name="LockBranch" id="@cdktf/provider-github.branchProtection.BranchProtection.property.lockBranch"></a>

```csharp
public object LockBranch { get; }
```

- *Type:* object

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.branchProtection.BranchProtection.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `PushRestrictions`<sup>Required</sup> <a name="PushRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtection.property.pushRestrictions"></a>

```csharp
public string[] PushRestrictions { get; }
```

- *Type:* string[]

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-github.branchProtection.BranchProtection.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

##### `RequireConversationResolution`<sup>Required</sup> <a name="RequireConversationResolution" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requireConversationResolution"></a>

```csharp
public object RequireConversationResolution { get; }
```

- *Type:* object

---

##### `RequiredLinearHistory`<sup>Required</sup> <a name="RequiredLinearHistory" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredLinearHistory"></a>

```csharp
public object RequiredLinearHistory { get; }
```

- *Type:* object

---

##### `RequireSignedCommits`<sup>Required</sup> <a name="RequireSignedCommits" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requireSignedCommits"></a>

```csharp
public object RequireSignedCommits { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.branchProtection.BranchProtection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BranchProtectionConfig <a name="BranchProtectionConfig" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Pattern,
    string RepositoryId,
    object AllowsDeletions = null,
    object AllowsForcePushes = null,
    object BlocksCreations = null,
    object EnforceAdmins = null,
    string Id = null,
    object LockBranch = null,
    string[] PushRestrictions = null,
    object RequireConversationResolution = null,
    object RequiredLinearHistory = null,
    object RequiredPullRequestReviews = null,
    object RequiredStatusChecks = null,
    object RequireSignedCommits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.pattern">Pattern</a></code> | <code>string</code> | Identifies the protection rule pattern. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | The name or node ID of the repository associated with this branch protection rule. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.allowsDeletions">AllowsDeletions</a></code> | <code>object</code> | Setting this to 'true' to allow the branch to be deleted. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.allowsForcePushes">AllowsForcePushes</a></code> | <code>object</code> | Setting this to 'true' to allow force pushes on the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.blocksCreations">BlocksCreations</a></code> | <code>object</code> | Setting this to 'true' to block creating the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.enforceAdmins">EnforceAdmins</a></code> | <code>object</code> | Setting this to 'true' enforces status checks for repository administrators. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#id BranchProtection#id}. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.lockBranch">LockBranch</a></code> | <code>object</code> | Setting this to 'true' will make the branch read-only and preventing any pushes to it. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.pushRestrictions">PushRestrictions</a></code> | <code>string[]</code> | The list of actor Names/IDs that may push to the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requireConversationResolution">RequireConversationResolution</a></code> | <code>object</code> | Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredLinearHistory">RequiredLinearHistory</a></code> | <code>object</code> | Setting this to 'true' enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredPullRequestReviews">RequiredPullRequestReviews</a></code> | <code>object</code> | required_pull_request_reviews block. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredStatusChecks">RequiredStatusChecks</a></code> | <code>object</code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requireSignedCommits">RequireSignedCommits</a></code> | <code>object</code> | Setting this to 'true' requires all commits to be signed with GPG. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

Identifies the protection rule pattern.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#pattern BranchProtection#pattern}

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

The name or node ID of the repository associated with this branch protection rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#repository_id BranchProtection#repository_id}

---

##### `AllowsDeletions`<sup>Optional</sup> <a name="AllowsDeletions" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.allowsDeletions"></a>

```csharp
public object AllowsDeletions { get; set; }
```

- *Type:* object

Setting this to 'true' to allow the branch to be deleted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#allows_deletions BranchProtection#allows_deletions}

---

##### `AllowsForcePushes`<sup>Optional</sup> <a name="AllowsForcePushes" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.allowsForcePushes"></a>

```csharp
public object AllowsForcePushes { get; set; }
```

- *Type:* object

Setting this to 'true' to allow force pushes on the branch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#allows_force_pushes BranchProtection#allows_force_pushes}

---

##### `BlocksCreations`<sup>Optional</sup> <a name="BlocksCreations" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.blocksCreations"></a>

```csharp
public object BlocksCreations { get; set; }
```

- *Type:* object

Setting this to 'true' to block creating the branch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#blocks_creations BranchProtection#blocks_creations}

---

##### `EnforceAdmins`<sup>Optional</sup> <a name="EnforceAdmins" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.enforceAdmins"></a>

```csharp
public object EnforceAdmins { get; set; }
```

- *Type:* object

Setting this to 'true' enforces status checks for repository administrators.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#enforce_admins BranchProtection#enforce_admins}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#id BranchProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LockBranch`<sup>Optional</sup> <a name="LockBranch" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.lockBranch"></a>

```csharp
public object LockBranch { get; set; }
```

- *Type:* object

Setting this to 'true' will make the branch read-only and preventing any pushes to it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#lock_branch BranchProtection#lock_branch}

---

##### `PushRestrictions`<sup>Optional</sup> <a name="PushRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.pushRestrictions"></a>

```csharp
public string[] PushRestrictions { get; set; }
```

- *Type:* string[]

The list of actor Names/IDs that may push to the branch.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#push_restrictions BranchProtection#push_restrictions}

---

##### `RequireConversationResolution`<sup>Optional</sup> <a name="RequireConversationResolution" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requireConversationResolution"></a>

```csharp
public object RequireConversationResolution { get; set; }
```

- *Type:* object

Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#require_conversation_resolution BranchProtection#require_conversation_resolution}

---

##### `RequiredLinearHistory`<sup>Optional</sup> <a name="RequiredLinearHistory" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredLinearHistory"></a>

```csharp
public object RequiredLinearHistory { get; set; }
```

- *Type:* object

Setting this to 'true' enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#required_linear_history BranchProtection#required_linear_history}

---

##### `RequiredPullRequestReviews`<sup>Optional</sup> <a name="RequiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredPullRequestReviews"></a>

```csharp
public object RequiredPullRequestReviews { get; set; }
```

- *Type:* object

required_pull_request_reviews block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#required_pull_request_reviews BranchProtection#required_pull_request_reviews}

---

##### `RequiredStatusChecks`<sup>Optional</sup> <a name="RequiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredStatusChecks"></a>

```csharp
public object RequiredStatusChecks { get; set; }
```

- *Type:* object

required_status_checks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#required_status_checks BranchProtection#required_status_checks}

---

##### `RequireSignedCommits`<sup>Optional</sup> <a name="RequireSignedCommits" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requireSignedCommits"></a>

```csharp
public object RequireSignedCommits { get; set; }
```

- *Type:* object

Setting this to 'true' requires all commits to be signed with GPG.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#require_signed_commits BranchProtection#require_signed_commits}

---

### BranchProtectionRequiredPullRequestReviews <a name="BranchProtectionRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionRequiredPullRequestReviews {
    string[] DismissalRestrictions = null,
    object DismissStaleReviews = null,
    string[] PullRequestBypassers = null,
    object RequireCodeOwnerReviews = null,
    double RequiredApprovingReviewCount = null,
    object RequireLastPushApproval = null,
    object RestrictDismissals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissalRestrictions">DismissalRestrictions</a></code> | <code>string[]</code> | The list of actor Names/IDs with dismissal access. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissStaleReviews">DismissStaleReviews</a></code> | <code>object</code> | Dismiss approved reviews automatically when a new commit is pushed. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.pullRequestBypassers">PullRequestBypassers</a></code> | <code>string[]</code> | The list of actor Names/IDs that are allowed to bypass pull request requirements. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireCodeOwnerReviews">RequireCodeOwnerReviews</a></code> | <code>object</code> | Require an approved review in pull requests including files with a designated code owner. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requiredApprovingReviewCount">RequiredApprovingReviewCount</a></code> | <code>double</code> | Require 'x' number of approvals to satisfy branch protection requirements. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireLastPushApproval">RequireLastPushApproval</a></code> | <code>object</code> | Require that The most recent push must be approved by someone other than the last pusher. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.restrictDismissals">RestrictDismissals</a></code> | <code>object</code> | Restrict pull request review dismissals. |

---

##### `DismissalRestrictions`<sup>Optional</sup> <a name="DismissalRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissalRestrictions"></a>

```csharp
public string[] DismissalRestrictions { get; set; }
```

- *Type:* string[]

The list of actor Names/IDs with dismissal access.

If not empty, 'restrict_dismissals' is ignored. Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#dismissal_restrictions BranchProtection#dismissal_restrictions}

---

##### `DismissStaleReviews`<sup>Optional</sup> <a name="DismissStaleReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissStaleReviews"></a>

```csharp
public object DismissStaleReviews { get; set; }
```

- *Type:* object

Dismiss approved reviews automatically when a new commit is pushed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#dismiss_stale_reviews BranchProtection#dismiss_stale_reviews}

---

##### `PullRequestBypassers`<sup>Optional</sup> <a name="PullRequestBypassers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.pullRequestBypassers"></a>

```csharp
public string[] PullRequestBypassers { get; set; }
```

- *Type:* string[]

The list of actor Names/IDs that are allowed to bypass pull request requirements.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#pull_request_bypassers BranchProtection#pull_request_bypassers}

---

##### `RequireCodeOwnerReviews`<sup>Optional</sup> <a name="RequireCodeOwnerReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireCodeOwnerReviews"></a>

```csharp
public object RequireCodeOwnerReviews { get; set; }
```

- *Type:* object

Require an approved review in pull requests including files with a designated code owner.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#require_code_owner_reviews BranchProtection#require_code_owner_reviews}

---

##### `RequiredApprovingReviewCount`<sup>Optional</sup> <a name="RequiredApprovingReviewCount" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requiredApprovingReviewCount"></a>

```csharp
public double RequiredApprovingReviewCount { get; set; }
```

- *Type:* double

Require 'x' number of approvals to satisfy branch protection requirements.

If this is specified it must be a number between 0-6.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#required_approving_review_count BranchProtection#required_approving_review_count}

---

##### `RequireLastPushApproval`<sup>Optional</sup> <a name="RequireLastPushApproval" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireLastPushApproval"></a>

```csharp
public object RequireLastPushApproval { get; set; }
```

- *Type:* object

Require that The most recent push must be approved by someone other than the last pusher.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#require_last_push_approval BranchProtection#require_last_push_approval}

---

##### `RestrictDismissals`<sup>Optional</sup> <a name="RestrictDismissals" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.restrictDismissals"></a>

```csharp
public object RestrictDismissals { get; set; }
```

- *Type:* object

Restrict pull request review dismissals.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#restrict_dismissals BranchProtection#restrict_dismissals}

---

### BranchProtectionRequiredStatusChecks <a name="BranchProtectionRequiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionRequiredStatusChecks {
    string[] Contexts = null,
    object Strict = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.contexts">Contexts</a></code> | <code>string[]</code> | The list of status checks to require in order to merge into this branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.strict">Strict</a></code> | <code>object</code> | Require branches to be up to date before merging. |

---

##### `Contexts`<sup>Optional</sup> <a name="Contexts" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.contexts"></a>

```csharp
public string[] Contexts { get; set; }
```

- *Type:* string[]

The list of status checks to require in order to merge into this branch.

No status checks are required by default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#contexts BranchProtection#contexts}

---

##### `Strict`<sup>Optional</sup> <a name="Strict" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.strict"></a>

```csharp
public object Strict { get; set; }
```

- *Type:* object

Require branches to be up to date before merging.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#strict BranchProtection#strict}

---

## Classes <a name="Classes" id="Classes"></a>

### BranchProtectionRequiredPullRequestReviewsList <a name="BranchProtectionRequiredPullRequestReviewsList" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionRequiredPullRequestReviewsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.get"></a>

```csharp
private BranchProtectionRequiredPullRequestReviewsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BranchProtectionRequiredPullRequestReviewsOutputReference <a name="BranchProtectionRequiredPullRequestReviewsOutputReference" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionRequiredPullRequestReviewsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissalRestrictions">ResetDismissalRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissStaleReviews">ResetDismissStaleReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetPullRequestBypassers">ResetPullRequestBypassers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews">ResetRequireCodeOwnerReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount">ResetRequiredApprovingReviewCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireLastPushApproval">ResetRequireLastPushApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRestrictDismissals">ResetRestrictDismissals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDismissalRestrictions` <a name="ResetDismissalRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissalRestrictions"></a>

```csharp
private void ResetDismissalRestrictions()
```

##### `ResetDismissStaleReviews` <a name="ResetDismissStaleReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissStaleReviews"></a>

```csharp
private void ResetDismissStaleReviews()
```

##### `ResetPullRequestBypassers` <a name="ResetPullRequestBypassers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetPullRequestBypassers"></a>

```csharp
private void ResetPullRequestBypassers()
```

##### `ResetRequireCodeOwnerReviews` <a name="ResetRequireCodeOwnerReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews"></a>

```csharp
private void ResetRequireCodeOwnerReviews()
```

##### `ResetRequiredApprovingReviewCount` <a name="ResetRequiredApprovingReviewCount" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount"></a>

```csharp
private void ResetRequiredApprovingReviewCount()
```

##### `ResetRequireLastPushApproval` <a name="ResetRequireLastPushApproval" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireLastPushApproval"></a>

```csharp
private void ResetRequireLastPushApproval()
```

##### `ResetRestrictDismissals` <a name="ResetRestrictDismissals" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRestrictDismissals"></a>

```csharp
private void ResetRestrictDismissals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictionsInput">DismissalRestrictionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput">DismissStaleReviewsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassersInput">PullRequestBypassersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput">RequireCodeOwnerReviewsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput">RequiredApprovingReviewCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApprovalInput">RequireLastPushApprovalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissalsInput">RestrictDismissalsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictions">DismissalRestrictions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviews">DismissStaleReviews</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassers">PullRequestBypassers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews">RequireCodeOwnerReviews</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount">RequiredApprovingReviewCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApproval">RequireLastPushApproval</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissals">RestrictDismissals</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DismissalRestrictionsInput`<sup>Optional</sup> <a name="DismissalRestrictionsInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictionsInput"></a>

```csharp
public string[] DismissalRestrictionsInput { get; }
```

- *Type:* string[]

---

##### `DismissStaleReviewsInput`<sup>Optional</sup> <a name="DismissStaleReviewsInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput"></a>

```csharp
public object DismissStaleReviewsInput { get; }
```

- *Type:* object

---

##### `PullRequestBypassersInput`<sup>Optional</sup> <a name="PullRequestBypassersInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassersInput"></a>

```csharp
public string[] PullRequestBypassersInput { get; }
```

- *Type:* string[]

---

##### `RequireCodeOwnerReviewsInput`<sup>Optional</sup> <a name="RequireCodeOwnerReviewsInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput"></a>

```csharp
public object RequireCodeOwnerReviewsInput { get; }
```

- *Type:* object

---

##### `RequiredApprovingReviewCountInput`<sup>Optional</sup> <a name="RequiredApprovingReviewCountInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput"></a>

```csharp
public double RequiredApprovingReviewCountInput { get; }
```

- *Type:* double

---

##### `RequireLastPushApprovalInput`<sup>Optional</sup> <a name="RequireLastPushApprovalInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApprovalInput"></a>

```csharp
public object RequireLastPushApprovalInput { get; }
```

- *Type:* object

---

##### `RestrictDismissalsInput`<sup>Optional</sup> <a name="RestrictDismissalsInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissalsInput"></a>

```csharp
public object RestrictDismissalsInput { get; }
```

- *Type:* object

---

##### `DismissalRestrictions`<sup>Required</sup> <a name="DismissalRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictions"></a>

```csharp
public string[] DismissalRestrictions { get; }
```

- *Type:* string[]

---

##### `DismissStaleReviews`<sup>Required</sup> <a name="DismissStaleReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviews"></a>

```csharp
public object DismissStaleReviews { get; }
```

- *Type:* object

---

##### `PullRequestBypassers`<sup>Required</sup> <a name="PullRequestBypassers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassers"></a>

```csharp
public string[] PullRequestBypassers { get; }
```

- *Type:* string[]

---

##### `RequireCodeOwnerReviews`<sup>Required</sup> <a name="RequireCodeOwnerReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews"></a>

```csharp
public object RequireCodeOwnerReviews { get; }
```

- *Type:* object

---

##### `RequiredApprovingReviewCount`<sup>Required</sup> <a name="RequiredApprovingReviewCount" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount"></a>

```csharp
public double RequiredApprovingReviewCount { get; }
```

- *Type:* double

---

##### `RequireLastPushApproval`<sup>Required</sup> <a name="RequireLastPushApproval" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApproval"></a>

```csharp
public object RequireLastPushApproval { get; }
```

- *Type:* object

---

##### `RestrictDismissals`<sup>Required</sup> <a name="RestrictDismissals" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissals"></a>

```csharp
public object RestrictDismissals { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BranchProtectionRequiredStatusChecksList <a name="BranchProtectionRequiredStatusChecksList" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionRequiredStatusChecksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.get"></a>

```csharp
private BranchProtectionRequiredStatusChecksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BranchProtectionRequiredStatusChecksOutputReference <a name="BranchProtectionRequiredStatusChecksOutputReference" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionRequiredStatusChecksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetContexts">ResetContexts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetStrict">ResetStrict</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContexts` <a name="ResetContexts" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetContexts"></a>

```csharp
private void ResetContexts()
```

##### `ResetStrict` <a name="ResetStrict" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetStrict"></a>

```csharp
private void ResetStrict()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contextsInput">ContextsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strictInput">StrictInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contexts">Contexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strict">Strict</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContextsInput`<sup>Optional</sup> <a name="ContextsInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contextsInput"></a>

```csharp
public string[] ContextsInput { get; }
```

- *Type:* string[]

---

##### `StrictInput`<sup>Optional</sup> <a name="StrictInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strictInput"></a>

```csharp
public object StrictInput { get; }
```

- *Type:* object

---

##### `Contexts`<sup>Required</sup> <a name="Contexts" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contexts"></a>

```csharp
public string[] Contexts { get; }
```

- *Type:* string[]

---

##### `Strict`<sup>Required</sup> <a name="Strict" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strict"></a>

```csharp
public object Strict { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



