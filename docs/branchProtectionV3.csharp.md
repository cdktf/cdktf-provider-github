# `branchProtectionV3` Submodule <a name="`branchProtectionV3` Submodule" id="@cdktf/provider-github.branchProtectionV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BranchProtectionV3 <a name="BranchProtectionV3" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3 github_branch_protection_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionV3(Construct Scope, string Id, BranchProtectionV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config">BranchProtectionV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config">BranchProtectionV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews">PutRequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks">PutRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions">PutRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetEnforceAdmins">ResetEnforceAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireConversationResolution">ResetRequireConversationResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredPullRequestReviews">ResetRequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredStatusChecks">ResetRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireSignedCommits">ResetRequireSignedCommits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRestrictions">ResetRestrictions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRequiredPullRequestReviews` <a name="PutRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews"></a>

```csharp
private void PutRequiredPullRequestReviews(BranchProtectionV3RequiredPullRequestReviews Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredPullRequestReviews.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

---

##### `PutRequiredStatusChecks` <a name="PutRequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks"></a>

```csharp
private void PutRequiredStatusChecks(BranchProtectionV3RequiredStatusChecks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRequiredStatusChecks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

---

##### `PutRestrictions` <a name="PutRestrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions"></a>

```csharp
private void PutRestrictions(BranchProtectionV3Restrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

---

##### `ResetEnforceAdmins` <a name="ResetEnforceAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetEnforceAdmins"></a>

```csharp
private void ResetEnforceAdmins()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRequireConversationResolution` <a name="ResetRequireConversationResolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireConversationResolution"></a>

```csharp
private void ResetRequireConversationResolution()
```

##### `ResetRequiredPullRequestReviews` <a name="ResetRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredPullRequestReviews"></a>

```csharp
private void ResetRequiredPullRequestReviews()
```

##### `ResetRequiredStatusChecks` <a name="ResetRequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequiredStatusChecks"></a>

```csharp
private void ResetRequiredStatusChecks()
```

##### `ResetRequireSignedCommits` <a name="ResetRequireSignedCommits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRequireSignedCommits"></a>

```csharp
private void ResetRequireSignedCommits()
```

##### `ResetRestrictions` <a name="ResetRestrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.resetRestrictions"></a>

```csharp
private void ResetRestrictions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

BranchProtectionV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

BranchProtectionV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

BranchProtectionV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviews">RequiredPullRequestReviews</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference">BranchProtectionV3RequiredPullRequestReviewsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecks">RequiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference">BranchProtectionV3RequiredStatusChecksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference">BranchProtectionV3RestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdminsInput">EnforceAdminsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolutionInput">RequireConversationResolutionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviewsInput">RequiredPullRequestReviewsInput</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecksInput">RequiredStatusChecksInput</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommitsInput">RequireSignedCommitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictionsInput">RestrictionsInput</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdmins">EnforceAdmins</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolution">RequireConversationResolution</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommits">RequireSignedCommits</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `RequiredPullRequestReviews`<sup>Required</sup> <a name="RequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviews"></a>

```csharp
public BranchProtectionV3RequiredPullRequestReviewsOutputReference RequiredPullRequestReviews { get; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference">BranchProtectionV3RequiredPullRequestReviewsOutputReference</a>

---

##### `RequiredStatusChecks`<sup>Required</sup> <a name="RequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecks"></a>

```csharp
public BranchProtectionV3RequiredStatusChecksOutputReference RequiredStatusChecks { get; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference">BranchProtectionV3RequiredStatusChecksOutputReference</a>

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictions"></a>

```csharp
public BranchProtectionV3RestrictionsOutputReference Restrictions { get; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference">BranchProtectionV3RestrictionsOutputReference</a>

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `EnforceAdminsInput`<sup>Optional</sup> <a name="EnforceAdminsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdminsInput"></a>

```csharp
public object EnforceAdminsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `RequireConversationResolutionInput`<sup>Optional</sup> <a name="RequireConversationResolutionInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolutionInput"></a>

```csharp
public object RequireConversationResolutionInput { get; }
```

- *Type:* object

---

##### `RequiredPullRequestReviewsInput`<sup>Optional</sup> <a name="RequiredPullRequestReviewsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredPullRequestReviewsInput"></a>

```csharp
public BranchProtectionV3RequiredPullRequestReviews RequiredPullRequestReviewsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

---

##### `RequiredStatusChecksInput`<sup>Optional</sup> <a name="RequiredStatusChecksInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requiredStatusChecksInput"></a>

```csharp
public BranchProtectionV3RequiredStatusChecks RequiredStatusChecksInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

---

##### `RequireSignedCommitsInput`<sup>Optional</sup> <a name="RequireSignedCommitsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommitsInput"></a>

```csharp
public object RequireSignedCommitsInput { get; }
```

- *Type:* object

---

##### `RestrictionsInput`<sup>Optional</sup> <a name="RestrictionsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.restrictionsInput"></a>

```csharp
public BranchProtectionV3Restrictions RestrictionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `EnforceAdmins`<sup>Required</sup> <a name="EnforceAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.enforceAdmins"></a>

```csharp
public object EnforceAdmins { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `RequireConversationResolution`<sup>Required</sup> <a name="RequireConversationResolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireConversationResolution"></a>

```csharp
public object RequireConversationResolution { get; }
```

- *Type:* object

---

##### `RequireSignedCommits`<sup>Required</sup> <a name="RequireSignedCommits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.requireSignedCommits"></a>

```csharp
public object RequireSignedCommits { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BranchProtectionV3Config <a name="BranchProtectionV3Config" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionV3Config {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Branch,
    string Repository,
    object EnforceAdmins = null,
    string Id = null,
    object RequireConversationResolution = null,
    BranchProtectionV3RequiredPullRequestReviews RequiredPullRequestReviews = null,
    BranchProtectionV3RequiredStatusChecks RequiredStatusChecks = null,
    object RequireSignedCommits = null,
    BranchProtectionV3Restrictions Restrictions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.branch">Branch</a></code> | <code>string</code> | The Git branch to protect. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.repository">Repository</a></code> | <code>string</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.enforceAdmins">EnforceAdmins</a></code> | <code>object</code> | Setting this to 'true' enforces status checks for repository administrators. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#id BranchProtectionV3#id}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireConversationResolution">RequireConversationResolution</a></code> | <code>object</code> | Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredPullRequestReviews">RequiredPullRequestReviews</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | required_pull_request_reviews block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredStatusChecks">RequiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireSignedCommits">RequireSignedCommits</a></code> | <code>object</code> | Setting this to 'true' requires all commits to be signed with GPG. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | restrictions block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

The Git branch to protect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#branch BranchProtectionV3#branch}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The GitHub repository name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#repository BranchProtectionV3#repository}

---

##### `EnforceAdmins`<sup>Optional</sup> <a name="EnforceAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.enforceAdmins"></a>

```csharp
public object EnforceAdmins { get; set; }
```

- *Type:* object

Setting this to 'true' enforces status checks for repository administrators.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#enforce_admins BranchProtectionV3#enforce_admins}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#id BranchProtectionV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RequireConversationResolution`<sup>Optional</sup> <a name="RequireConversationResolution" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireConversationResolution"></a>

```csharp
public object RequireConversationResolution { get; set; }
```

- *Type:* object

Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#require_conversation_resolution BranchProtectionV3#require_conversation_resolution}

---

##### `RequiredPullRequestReviews`<sup>Optional</sup> <a name="RequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredPullRequestReviews"></a>

```csharp
public BranchProtectionV3RequiredPullRequestReviews RequiredPullRequestReviews { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

required_pull_request_reviews block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#required_pull_request_reviews BranchProtectionV3#required_pull_request_reviews}

---

##### `RequiredStatusChecks`<sup>Optional</sup> <a name="RequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requiredStatusChecks"></a>

```csharp
public BranchProtectionV3RequiredStatusChecks RequiredStatusChecks { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

required_status_checks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#required_status_checks BranchProtectionV3#required_status_checks}

---

##### `RequireSignedCommits`<sup>Optional</sup> <a name="RequireSignedCommits" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.requireSignedCommits"></a>

```csharp
public object RequireSignedCommits { get; set; }
```

- *Type:* object

Setting this to 'true' requires all commits to be signed with GPG.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#require_signed_commits BranchProtectionV3#require_signed_commits}

---

##### `Restrictions`<sup>Optional</sup> <a name="Restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Config.property.restrictions"></a>

```csharp
public BranchProtectionV3Restrictions Restrictions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#restrictions BranchProtectionV3#restrictions}

---

### BranchProtectionV3RequiredPullRequestReviews <a name="BranchProtectionV3RequiredPullRequestReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionV3RequiredPullRequestReviews {
    BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances BypassPullRequestAllowances = null,
    string[] DismissalTeams = null,
    string[] DismissalUsers = null,
    object DismissStaleReviews = null,
    object IncludeAdmins = null,
    object RequireCodeOwnerReviews = null,
    double RequiredApprovingReviewCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.bypassPullRequestAllowances">BypassPullRequestAllowances</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a></code> | bypass_pull_request_allowances block. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalTeams">DismissalTeams</a></code> | <code>string[]</code> | The list of team slugs with dismissal access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalUsers">DismissalUsers</a></code> | <code>string[]</code> | The list of user logins with dismissal access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissStaleReviews">DismissStaleReviews</a></code> | <code>object</code> | Dismiss approved reviews automatically when a new commit is pushed. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.includeAdmins">IncludeAdmins</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requireCodeOwnerReviews">RequireCodeOwnerReviews</a></code> | <code>object</code> | Require an approved review in pull requests including files with a designated code owner. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requiredApprovingReviewCount">RequiredApprovingReviewCount</a></code> | <code>double</code> | Require 'x' number of approvals to satisfy branch protection requirements. |

---

##### `BypassPullRequestAllowances`<sup>Optional</sup> <a name="BypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.bypassPullRequestAllowances"></a>

```csharp
public BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances BypassPullRequestAllowances { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

bypass_pull_request_allowances block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#bypass_pull_request_allowances BranchProtectionV3#bypass_pull_request_allowances}

---

##### `DismissalTeams`<sup>Optional</sup> <a name="DismissalTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalTeams"></a>

```csharp
public string[] DismissalTeams { get; set; }
```

- *Type:* string[]

The list of team slugs with dismissal access.

Always use slug of the team, not its name. Each team already has to have access to the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#dismissal_teams BranchProtectionV3#dismissal_teams}

---

##### `DismissalUsers`<sup>Optional</sup> <a name="DismissalUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissalUsers"></a>

```csharp
public string[] DismissalUsers { get; set; }
```

- *Type:* string[]

The list of user logins with dismissal access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#dismissal_users BranchProtectionV3#dismissal_users}

---

##### `DismissStaleReviews`<sup>Optional</sup> <a name="DismissStaleReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.dismissStaleReviews"></a>

```csharp
public object DismissStaleReviews { get; set; }
```

- *Type:* object

Dismiss approved reviews automatically when a new commit is pushed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#dismiss_stale_reviews BranchProtectionV3#dismiss_stale_reviews}

---

##### `IncludeAdmins`<sup>Optional</sup> <a name="IncludeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.includeAdmins"></a>

```csharp
public object IncludeAdmins { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}.

---

##### `RequireCodeOwnerReviews`<sup>Optional</sup> <a name="RequireCodeOwnerReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requireCodeOwnerReviews"></a>

```csharp
public object RequireCodeOwnerReviews { get; set; }
```

- *Type:* object

Require an approved review in pull requests including files with a designated code owner.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#require_code_owner_reviews BranchProtectionV3#require_code_owner_reviews}

---

##### `RequiredApprovingReviewCount`<sup>Optional</sup> <a name="RequiredApprovingReviewCount" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews.property.requiredApprovingReviewCount"></a>

```csharp
public double RequiredApprovingReviewCount { get; set; }
```

- *Type:* double

Require 'x' number of approvals to satisfy branch protection requirements.

If this is specified it must be a number between 0-6.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#required_approving_review_count BranchProtectionV3#required_approving_review_count}

---

### BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances <a name="BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances {
    string[] Apps = null,
    string[] Teams = null,
    string[] Users = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.apps">Apps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#apps BranchProtectionV3#apps}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.teams">Teams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#teams BranchProtectionV3#teams}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.users">Users</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#users BranchProtectionV3#users}. |

---

##### `Apps`<sup>Optional</sup> <a name="Apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.apps"></a>

```csharp
public string[] Apps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#apps BranchProtectionV3#apps}.

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.teams"></a>

```csharp
public string[] Teams { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#teams BranchProtectionV3#teams}.

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances.property.users"></a>

```csharp
public string[] Users { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#users BranchProtectionV3#users}.

---

### BranchProtectionV3RequiredStatusChecks <a name="BranchProtectionV3RequiredStatusChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionV3RequiredStatusChecks {
    string[] Checks = null,
    string[] Contexts = null,
    object IncludeAdmins = null,
    object Strict = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.checks">Checks</a></code> | <code>string[]</code> | The list of status checks to require in order to merge into this branch. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.contexts">Contexts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#contexts BranchProtectionV3#contexts}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.includeAdmins">IncludeAdmins</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.strict">Strict</a></code> | <code>object</code> | Require branches to be up to date before merging. |

---

##### `Checks`<sup>Optional</sup> <a name="Checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.checks"></a>

```csharp
public string[] Checks { get; set; }
```

- *Type:* string[]

The list of status checks to require in order to merge into this branch.

No status checks are required by default. Checks should be strings containing the 'context' and 'app_id' like so 'context:app_id'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#checks BranchProtectionV3#checks}

---

##### `Contexts`<sup>Optional</sup> <a name="Contexts" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.contexts"></a>

```csharp
public string[] Contexts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#contexts BranchProtectionV3#contexts}.

---

##### `IncludeAdmins`<sup>Optional</sup> <a name="IncludeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.includeAdmins"></a>

```csharp
public object IncludeAdmins { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#include_admins BranchProtectionV3#include_admins}.

---

##### `Strict`<sup>Optional</sup> <a name="Strict" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks.property.strict"></a>

```csharp
public object Strict { get; set; }
```

- *Type:* object

Require branches to be up to date before merging.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#strict BranchProtectionV3#strict}

---

### BranchProtectionV3Restrictions <a name="BranchProtectionV3Restrictions" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionV3Restrictions {
    string[] Apps = null,
    string[] Teams = null,
    string[] Users = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.apps">Apps</a></code> | <code>string[]</code> | The list of app slugs with push access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.teams">Teams</a></code> | <code>string[]</code> | The list of team slugs with push access. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.users">Users</a></code> | <code>string[]</code> | The list of user logins with push access. |

---

##### `Apps`<sup>Optional</sup> <a name="Apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.apps"></a>

```csharp
public string[] Apps { get; set; }
```

- *Type:* string[]

The list of app slugs with push access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#apps BranchProtectionV3#apps}

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.teams"></a>

```csharp
public string[] Teams { get; set; }
```

- *Type:* string[]

The list of team slugs with push access.

Always use slug of the team, not its name. Each team already has to have access to the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#teams BranchProtectionV3#teams}

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions.property.users"></a>

```csharp
public string[] Users { get; set; }
```

- *Type:* string[]

The list of user logins with push access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection_v3#users BranchProtectionV3#users}

---

## Classes <a name="Classes" id="Classes"></a>

### BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference <a name="BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetApps">ResetApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApps` <a name="ResetApps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetApps"></a>

```csharp
private void ResetApps()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.resetUsers"></a>

```csharp
private void ResetUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.appsInput">AppsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teamsInput">TeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.usersInput">UsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.apps">Apps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teams">Teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.users">Users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppsInput`<sup>Optional</sup> <a name="AppsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.appsInput"></a>

```csharp
public string[] AppsInput { get; }
```

- *Type:* string[]

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teamsInput"></a>

```csharp
public string[] TeamsInput { get; }
```

- *Type:* string[]

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.usersInput"></a>

```csharp
public string[] UsersInput { get; }
```

- *Type:* string[]

---

##### `Apps`<sup>Required</sup> <a name="Apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.apps"></a>

```csharp
public string[] Apps { get; }
```

- *Type:* string[]

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.teams"></a>

```csharp
public string[] Teams { get; }
```

- *Type:* string[]

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.users"></a>

```csharp
public string[] Users { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference.property.internalValue"></a>

```csharp
public BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

---


### BranchProtectionV3RequiredPullRequestReviewsOutputReference <a name="BranchProtectionV3RequiredPullRequestReviewsOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionV3RequiredPullRequestReviewsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances">PutBypassPullRequestAllowances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetBypassPullRequestAllowances">ResetBypassPullRequestAllowances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalTeams">ResetDismissalTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalUsers">ResetDismissalUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissStaleReviews">ResetDismissStaleReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetIncludeAdmins">ResetIncludeAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews">ResetRequireCodeOwnerReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount">ResetRequiredApprovingReviewCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBypassPullRequestAllowances` <a name="PutBypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances"></a>

```csharp
private void PutBypassPullRequestAllowances(BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.putBypassPullRequestAllowances.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

---

##### `ResetBypassPullRequestAllowances` <a name="ResetBypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetBypassPullRequestAllowances"></a>

```csharp
private void ResetBypassPullRequestAllowances()
```

##### `ResetDismissalTeams` <a name="ResetDismissalTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalTeams"></a>

```csharp
private void ResetDismissalTeams()
```

##### `ResetDismissalUsers` <a name="ResetDismissalUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissalUsers"></a>

```csharp
private void ResetDismissalUsers()
```

##### `ResetDismissStaleReviews` <a name="ResetDismissStaleReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetDismissStaleReviews"></a>

```csharp
private void ResetDismissStaleReviews()
```

##### `ResetIncludeAdmins` <a name="ResetIncludeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetIncludeAdmins"></a>

```csharp
private void ResetIncludeAdmins()
```

##### `ResetRequireCodeOwnerReviews` <a name="ResetRequireCodeOwnerReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews"></a>

```csharp
private void ResetRequireCodeOwnerReviews()
```

##### `ResetRequiredApprovingReviewCount` <a name="ResetRequiredApprovingReviewCount" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount"></a>

```csharp
private void ResetRequiredApprovingReviewCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowances">BypassPullRequestAllowances</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowancesInput">BypassPullRequestAllowancesInput</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeamsInput">DismissalTeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsersInput">DismissalUsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput">DismissStaleReviewsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdminsInput">IncludeAdminsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput">RequireCodeOwnerReviewsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput">RequiredApprovingReviewCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeams">DismissalTeams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsers">DismissalUsers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviews">DismissStaleReviews</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdmins">IncludeAdmins</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews">RequireCodeOwnerReviews</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount">RequiredApprovingReviewCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BypassPullRequestAllowances`<sup>Required</sup> <a name="BypassPullRequestAllowances" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowances"></a>

```csharp
public BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference BypassPullRequestAllowances { get; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowancesOutputReference</a>

---

##### `BypassPullRequestAllowancesInput`<sup>Optional</sup> <a name="BypassPullRequestAllowancesInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.bypassPullRequestAllowancesInput"></a>

```csharp
public BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances BypassPullRequestAllowancesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances">BranchProtectionV3RequiredPullRequestReviewsBypassPullRequestAllowances</a>

---

##### `DismissalTeamsInput`<sup>Optional</sup> <a name="DismissalTeamsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeamsInput"></a>

```csharp
public string[] DismissalTeamsInput { get; }
```

- *Type:* string[]

---

##### `DismissalUsersInput`<sup>Optional</sup> <a name="DismissalUsersInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsersInput"></a>

```csharp
public string[] DismissalUsersInput { get; }
```

- *Type:* string[]

---

##### `DismissStaleReviewsInput`<sup>Optional</sup> <a name="DismissStaleReviewsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput"></a>

```csharp
public object DismissStaleReviewsInput { get; }
```

- *Type:* object

---

##### `IncludeAdminsInput`<sup>Optional</sup> <a name="IncludeAdminsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdminsInput"></a>

```csharp
public object IncludeAdminsInput { get; }
```

- *Type:* object

---

##### `RequireCodeOwnerReviewsInput`<sup>Optional</sup> <a name="RequireCodeOwnerReviewsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput"></a>

```csharp
public object RequireCodeOwnerReviewsInput { get; }
```

- *Type:* object

---

##### `RequiredApprovingReviewCountInput`<sup>Optional</sup> <a name="RequiredApprovingReviewCountInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput"></a>

```csharp
public double RequiredApprovingReviewCountInput { get; }
```

- *Type:* double

---

##### `DismissalTeams`<sup>Required</sup> <a name="DismissalTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalTeams"></a>

```csharp
public string[] DismissalTeams { get; }
```

- *Type:* string[]

---

##### `DismissalUsers`<sup>Required</sup> <a name="DismissalUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissalUsers"></a>

```csharp
public string[] DismissalUsers { get; }
```

- *Type:* string[]

---

##### `DismissStaleReviews`<sup>Required</sup> <a name="DismissStaleReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.dismissStaleReviews"></a>

```csharp
public object DismissStaleReviews { get; }
```

- *Type:* object

---

##### `IncludeAdmins`<sup>Required</sup> <a name="IncludeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.includeAdmins"></a>

```csharp
public object IncludeAdmins { get; }
```

- *Type:* object

---

##### `RequireCodeOwnerReviews`<sup>Required</sup> <a name="RequireCodeOwnerReviews" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews"></a>

```csharp
public object RequireCodeOwnerReviews { get; }
```

- *Type:* object

---

##### `RequiredApprovingReviewCount`<sup>Required</sup> <a name="RequiredApprovingReviewCount" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount"></a>

```csharp
public double RequiredApprovingReviewCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviewsOutputReference.property.internalValue"></a>

```csharp
public BranchProtectionV3RequiredPullRequestReviews InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredPullRequestReviews">BranchProtectionV3RequiredPullRequestReviews</a>

---


### BranchProtectionV3RequiredStatusChecksOutputReference <a name="BranchProtectionV3RequiredStatusChecksOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionV3RequiredStatusChecksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetChecks">ResetChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetContexts">ResetContexts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetIncludeAdmins">ResetIncludeAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetStrict">ResetStrict</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChecks` <a name="ResetChecks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetChecks"></a>

```csharp
private void ResetChecks()
```

##### `ResetContexts` <a name="ResetContexts" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetContexts"></a>

```csharp
private void ResetContexts()
```

##### `ResetIncludeAdmins` <a name="ResetIncludeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetIncludeAdmins"></a>

```csharp
private void ResetIncludeAdmins()
```

##### `ResetStrict` <a name="ResetStrict" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.resetStrict"></a>

```csharp
private void ResetStrict()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checksInput">ChecksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contextsInput">ContextsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdminsInput">IncludeAdminsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strictInput">StrictInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checks">Checks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contexts">Contexts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdmins">IncludeAdmins</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strict">Strict</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChecksInput`<sup>Optional</sup> <a name="ChecksInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checksInput"></a>

```csharp
public string[] ChecksInput { get; }
```

- *Type:* string[]

---

##### `ContextsInput`<sup>Optional</sup> <a name="ContextsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contextsInput"></a>

```csharp
public string[] ContextsInput { get; }
```

- *Type:* string[]

---

##### `IncludeAdminsInput`<sup>Optional</sup> <a name="IncludeAdminsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdminsInput"></a>

```csharp
public object IncludeAdminsInput { get; }
```

- *Type:* object

---

##### `StrictInput`<sup>Optional</sup> <a name="StrictInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strictInput"></a>

```csharp
public object StrictInput { get; }
```

- *Type:* object

---

##### `Checks`<sup>Required</sup> <a name="Checks" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.checks"></a>

```csharp
public string[] Checks { get; }
```

- *Type:* string[]

---

##### `Contexts`<sup>Required</sup> <a name="Contexts" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.contexts"></a>

```csharp
public string[] Contexts { get; }
```

- *Type:* string[]

---

##### `IncludeAdmins`<sup>Required</sup> <a name="IncludeAdmins" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.includeAdmins"></a>

```csharp
public object IncludeAdmins { get; }
```

- *Type:* object

---

##### `Strict`<sup>Required</sup> <a name="Strict" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.strict"></a>

```csharp
public object Strict { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecksOutputReference.property.internalValue"></a>

```csharp
public BranchProtectionV3RequiredStatusChecks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RequiredStatusChecks">BranchProtectionV3RequiredStatusChecks</a>

---


### BranchProtectionV3RestrictionsOutputReference <a name="BranchProtectionV3RestrictionsOutputReference" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new BranchProtectionV3RestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetApps">ResetApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApps` <a name="ResetApps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetApps"></a>

```csharp
private void ResetApps()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.resetUsers"></a>

```csharp
private void ResetUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.appsInput">AppsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teamsInput">TeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.usersInput">UsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.apps">Apps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teams">Teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.users">Users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppsInput`<sup>Optional</sup> <a name="AppsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.appsInput"></a>

```csharp
public string[] AppsInput { get; }
```

- *Type:* string[]

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teamsInput"></a>

```csharp
public string[] TeamsInput { get; }
```

- *Type:* string[]

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.usersInput"></a>

```csharp
public string[] UsersInput { get; }
```

- *Type:* string[]

---

##### `Apps`<sup>Required</sup> <a name="Apps" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.apps"></a>

```csharp
public string[] Apps { get; }
```

- *Type:* string[]

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.teams"></a>

```csharp
public string[] Teams { get; }
```

- *Type:* string[]

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.users"></a>

```csharp
public string[] Users { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.branchProtectionV3.BranchProtectionV3RestrictionsOutputReference.property.internalValue"></a>

```csharp
public BranchProtectionV3Restrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.branchProtectionV3.BranchProtectionV3Restrictions">BranchProtectionV3Restrictions</a>

---



