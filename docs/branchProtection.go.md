# `branchProtection` Submodule <a name="`branchProtection` Submodule" id="@cdktf/provider-github.branchProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BranchProtection <a name="BranchProtection" id="@cdktf/provider-github.branchProtection.BranchProtection"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/branch_protection github_branch_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotection"

branchprotection.NewBranchProtection(scope Construct, id *string, config BranchProtectionConfig) BranchProtection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig">BranchProtectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.branchProtection.BranchProtection.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.branchProtection.BranchProtection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.branchProtection.BranchProtection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtection.BranchProtection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.branchProtection.BranchProtection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.branchProtection.BranchProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.branchProtection.BranchProtection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.branchProtection.BranchProtection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.branchProtection.BranchProtection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRequiredPullRequestReviews` <a name="PutRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtection.putRequiredPullRequestReviews"></a>

```go
func PutRequiredPullRequestReviews(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtection.BranchProtection.putRequiredPullRequestReviews.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequiredStatusChecks` <a name="PutRequiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtection.putRequiredStatusChecks"></a>

```go
func PutRequiredStatusChecks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.branchProtection.BranchProtection.putRequiredStatusChecks.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowsDeletions` <a name="ResetAllowsDeletions" id="@cdktf/provider-github.branchProtection.BranchProtection.resetAllowsDeletions"></a>

```go
func ResetAllowsDeletions()
```

##### `ResetAllowsForcePushes` <a name="ResetAllowsForcePushes" id="@cdktf/provider-github.branchProtection.BranchProtection.resetAllowsForcePushes"></a>

```go
func ResetAllowsForcePushes()
```

##### `ResetBlocksCreations` <a name="ResetBlocksCreations" id="@cdktf/provider-github.branchProtection.BranchProtection.resetBlocksCreations"></a>

```go
func ResetBlocksCreations()
```

##### `ResetEnforceAdmins` <a name="ResetEnforceAdmins" id="@cdktf/provider-github.branchProtection.BranchProtection.resetEnforceAdmins"></a>

```go
func ResetEnforceAdmins()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.branchProtection.BranchProtection.resetId"></a>

```go
func ResetId()
```

##### `ResetLockBranch` <a name="ResetLockBranch" id="@cdktf/provider-github.branchProtection.BranchProtection.resetLockBranch"></a>

```go
func ResetLockBranch()
```

##### `ResetPushRestrictions` <a name="ResetPushRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtection.resetPushRestrictions"></a>

```go
func ResetPushRestrictions()
```

##### `ResetRequireConversationResolution` <a name="ResetRequireConversationResolution" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequireConversationResolution"></a>

```go
func ResetRequireConversationResolution()
```

##### `ResetRequiredLinearHistory` <a name="ResetRequiredLinearHistory" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredLinearHistory"></a>

```go
func ResetRequiredLinearHistory()
```

##### `ResetRequiredPullRequestReviews` <a name="ResetRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredPullRequestReviews"></a>

```go
func ResetRequiredPullRequestReviews()
```

##### `ResetRequiredStatusChecks` <a name="ResetRequiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequiredStatusChecks"></a>

```go
func ResetRequiredStatusChecks()
```

##### `ResetRequireSignedCommits` <a name="ResetRequireSignedCommits" id="@cdktf/provider-github.branchProtection.BranchProtection.resetRequireSignedCommits"></a>

```go
func ResetRequireSignedCommits()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.branchProtection.BranchProtection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotection"

branchprotection.BranchProtection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtection.BranchProtection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.branchProtection.BranchProtection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotection"

branchprotection.BranchProtection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtection.BranchProtection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.branchProtection.BranchProtection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotection"

branchprotection.BranchProtection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.branchProtection.BranchProtection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviews">RequiredPullRequestReviews</a></code> | <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList">BranchProtectionRequiredPullRequestReviewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredStatusChecks">RequiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList">BranchProtectionRequiredStatusChecksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.allowsDeletionsInput">AllowsDeletionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.allowsForcePushesInput">AllowsForcePushesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.blocksCreationsInput">BlocksCreationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.enforceAdminsInput">EnforceAdminsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.lockBranchInput">LockBranchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.pushRestrictionsInput">PushRestrictionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requireConversationResolutionInput">RequireConversationResolutionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredLinearHistoryInput">RequiredLinearHistoryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviewsInput">RequiredPullRequestReviewsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredStatusChecksInput">RequiredStatusChecksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requireSignedCommitsInput">RequireSignedCommitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.allowsDeletions">AllowsDeletions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.allowsForcePushes">AllowsForcePushes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.blocksCreations">BlocksCreations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.enforceAdmins">EnforceAdmins</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.lockBranch">LockBranch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.pushRestrictions">PushRestrictions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requireConversationResolution">RequireConversationResolution</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requiredLinearHistory">RequiredLinearHistory</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.requireSignedCommits">RequireSignedCommits</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.branchProtection.BranchProtection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.branchProtection.BranchProtection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtection.BranchProtection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.branchProtection.BranchProtection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.branchProtection.BranchProtection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.branchProtection.BranchProtection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.branchProtection.BranchProtection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.branchProtection.BranchProtection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.branchProtection.BranchProtection.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.branchProtection.BranchProtection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.branchProtection.BranchProtection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.branchProtection.BranchProtection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.branchProtection.BranchProtection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.branchProtection.BranchProtection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RequiredPullRequestReviews`<sup>Required</sup> <a name="RequiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviews"></a>

```go
func RequiredPullRequestReviews() BranchProtectionRequiredPullRequestReviewsList
```

- *Type:* <a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList">BranchProtectionRequiredPullRequestReviewsList</a>

---

##### `RequiredStatusChecks`<sup>Required</sup> <a name="RequiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredStatusChecks"></a>

```go
func RequiredStatusChecks() BranchProtectionRequiredStatusChecksList
```

- *Type:* <a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList">BranchProtectionRequiredStatusChecksList</a>

---

##### `AllowsDeletionsInput`<sup>Optional</sup> <a name="AllowsDeletionsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.allowsDeletionsInput"></a>

```go
func AllowsDeletionsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowsForcePushesInput`<sup>Optional</sup> <a name="AllowsForcePushesInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.allowsForcePushesInput"></a>

```go
func AllowsForcePushesInput() interface{}
```

- *Type:* interface{}

---

##### `BlocksCreationsInput`<sup>Optional</sup> <a name="BlocksCreationsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.blocksCreationsInput"></a>

```go
func BlocksCreationsInput() interface{}
```

- *Type:* interface{}

---

##### `EnforceAdminsInput`<sup>Optional</sup> <a name="EnforceAdminsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.enforceAdminsInput"></a>

```go
func EnforceAdminsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LockBranchInput`<sup>Optional</sup> <a name="LockBranchInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.lockBranchInput"></a>

```go
func LockBranchInput() interface{}
```

- *Type:* interface{}

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `PushRestrictionsInput`<sup>Optional</sup> <a name="PushRestrictionsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.pushRestrictionsInput"></a>

```go
func PushRestrictionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `RequireConversationResolutionInput`<sup>Optional</sup> <a name="RequireConversationResolutionInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requireConversationResolutionInput"></a>

```go
func RequireConversationResolutionInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredLinearHistoryInput`<sup>Optional</sup> <a name="RequiredLinearHistoryInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredLinearHistoryInput"></a>

```go
func RequiredLinearHistoryInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredPullRequestReviewsInput`<sup>Optional</sup> <a name="RequiredPullRequestReviewsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredPullRequestReviewsInput"></a>

```go
func RequiredPullRequestReviewsInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredStatusChecksInput`<sup>Optional</sup> <a name="RequiredStatusChecksInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredStatusChecksInput"></a>

```go
func RequiredStatusChecksInput() interface{}
```

- *Type:* interface{}

---

##### `RequireSignedCommitsInput`<sup>Optional</sup> <a name="RequireSignedCommitsInput" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requireSignedCommitsInput"></a>

```go
func RequireSignedCommitsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowsDeletions`<sup>Required</sup> <a name="AllowsDeletions" id="@cdktf/provider-github.branchProtection.BranchProtection.property.allowsDeletions"></a>

```go
func AllowsDeletions() interface{}
```

- *Type:* interface{}

---

##### `AllowsForcePushes`<sup>Required</sup> <a name="AllowsForcePushes" id="@cdktf/provider-github.branchProtection.BranchProtection.property.allowsForcePushes"></a>

```go
func AllowsForcePushes() interface{}
```

- *Type:* interface{}

---

##### `BlocksCreations`<sup>Required</sup> <a name="BlocksCreations" id="@cdktf/provider-github.branchProtection.BranchProtection.property.blocksCreations"></a>

```go
func BlocksCreations() interface{}
```

- *Type:* interface{}

---

##### `EnforceAdmins`<sup>Required</sup> <a name="EnforceAdmins" id="@cdktf/provider-github.branchProtection.BranchProtection.property.enforceAdmins"></a>

```go
func EnforceAdmins() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.branchProtection.BranchProtection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LockBranch`<sup>Required</sup> <a name="LockBranch" id="@cdktf/provider-github.branchProtection.BranchProtection.property.lockBranch"></a>

```go
func LockBranch() interface{}
```

- *Type:* interface{}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.branchProtection.BranchProtection.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `PushRestrictions`<sup>Required</sup> <a name="PushRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtection.property.pushRestrictions"></a>

```go
func PushRestrictions() *[]*string
```

- *Type:* *[]*string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-github.branchProtection.BranchProtection.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `RequireConversationResolution`<sup>Required</sup> <a name="RequireConversationResolution" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requireConversationResolution"></a>

```go
func RequireConversationResolution() interface{}
```

- *Type:* interface{}

---

##### `RequiredLinearHistory`<sup>Required</sup> <a name="RequiredLinearHistory" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requiredLinearHistory"></a>

```go
func RequiredLinearHistory() interface{}
```

- *Type:* interface{}

---

##### `RequireSignedCommits`<sup>Required</sup> <a name="RequireSignedCommits" id="@cdktf/provider-github.branchProtection.BranchProtection.property.requireSignedCommits"></a>

```go
func RequireSignedCommits() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.branchProtection.BranchProtection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BranchProtectionConfig <a name="BranchProtectionConfig" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotection"

&branchprotection.BranchProtectionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Pattern: *string,
	RepositoryId: *string,
	AllowsDeletions: interface{},
	AllowsForcePushes: interface{},
	BlocksCreations: interface{},
	EnforceAdmins: interface{},
	Id: *string,
	LockBranch: interface{},
	PushRestrictions: *[]*string,
	RequireConversationResolution: interface{},
	RequiredLinearHistory: interface{},
	RequiredPullRequestReviews: interface{},
	RequiredStatusChecks: interface{},
	RequireSignedCommits: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.pattern">Pattern</a></code> | <code>*string</code> | Identifies the protection rule pattern. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | The name or node ID of the repository associated with this branch protection rule. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.allowsDeletions">AllowsDeletions</a></code> | <code>interface{}</code> | Setting this to 'true' to allow the branch to be deleted. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.allowsForcePushes">AllowsForcePushes</a></code> | <code>interface{}</code> | Setting this to 'true' to allow force pushes on the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.blocksCreations">BlocksCreations</a></code> | <code>interface{}</code> | Setting this to 'true' to block creating the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.enforceAdmins">EnforceAdmins</a></code> | <code>interface{}</code> | Setting this to 'true' enforces status checks for repository administrators. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#id BranchProtection#id}. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.lockBranch">LockBranch</a></code> | <code>interface{}</code> | Setting this to 'true' will make the branch read-only and preventing any pushes to it. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.pushRestrictions">PushRestrictions</a></code> | <code>*[]*string</code> | The list of actor Names/IDs that may push to the branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requireConversationResolution">RequireConversationResolution</a></code> | <code>interface{}</code> | Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredLinearHistory">RequiredLinearHistory</a></code> | <code>interface{}</code> | Setting this to 'true' enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredPullRequestReviews">RequiredPullRequestReviews</a></code> | <code>interface{}</code> | required_pull_request_reviews block. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredStatusChecks">RequiredStatusChecks</a></code> | <code>interface{}</code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requireSignedCommits">RequireSignedCommits</a></code> | <code>interface{}</code> | Setting this to 'true' requires all commits to be signed with GPG. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Identifies the protection rule pattern.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#pattern BranchProtection#pattern}

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

The name or node ID of the repository associated with this branch protection rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#repository_id BranchProtection#repository_id}

---

##### `AllowsDeletions`<sup>Optional</sup> <a name="AllowsDeletions" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.allowsDeletions"></a>

```go
AllowsDeletions interface{}
```

- *Type:* interface{}

Setting this to 'true' to allow the branch to be deleted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#allows_deletions BranchProtection#allows_deletions}

---

##### `AllowsForcePushes`<sup>Optional</sup> <a name="AllowsForcePushes" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.allowsForcePushes"></a>

```go
AllowsForcePushes interface{}
```

- *Type:* interface{}

Setting this to 'true' to allow force pushes on the branch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#allows_force_pushes BranchProtection#allows_force_pushes}

---

##### `BlocksCreations`<sup>Optional</sup> <a name="BlocksCreations" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.blocksCreations"></a>

```go
BlocksCreations interface{}
```

- *Type:* interface{}

Setting this to 'true' to block creating the branch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#blocks_creations BranchProtection#blocks_creations}

---

##### `EnforceAdmins`<sup>Optional</sup> <a name="EnforceAdmins" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.enforceAdmins"></a>

```go
EnforceAdmins interface{}
```

- *Type:* interface{}

Setting this to 'true' enforces status checks for repository administrators.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#enforce_admins BranchProtection#enforce_admins}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#id BranchProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LockBranch`<sup>Optional</sup> <a name="LockBranch" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.lockBranch"></a>

```go
LockBranch interface{}
```

- *Type:* interface{}

Setting this to 'true' will make the branch read-only and preventing any pushes to it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#lock_branch BranchProtection#lock_branch}

---

##### `PushRestrictions`<sup>Optional</sup> <a name="PushRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.pushRestrictions"></a>

```go
PushRestrictions *[]*string
```

- *Type:* *[]*string

The list of actor Names/IDs that may push to the branch.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#push_restrictions BranchProtection#push_restrictions}

---

##### `RequireConversationResolution`<sup>Optional</sup> <a name="RequireConversationResolution" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requireConversationResolution"></a>

```go
RequireConversationResolution interface{}
```

- *Type:* interface{}

Setting this to 'true' requires all conversations on code must be resolved before a pull request can be merged.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#require_conversation_resolution BranchProtection#require_conversation_resolution}

---

##### `RequiredLinearHistory`<sup>Optional</sup> <a name="RequiredLinearHistory" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredLinearHistory"></a>

```go
RequiredLinearHistory interface{}
```

- *Type:* interface{}

Setting this to 'true' enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#required_linear_history BranchProtection#required_linear_history}

---

##### `RequiredPullRequestReviews`<sup>Optional</sup> <a name="RequiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredPullRequestReviews"></a>

```go
RequiredPullRequestReviews interface{}
```

- *Type:* interface{}

required_pull_request_reviews block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#required_pull_request_reviews BranchProtection#required_pull_request_reviews}

---

##### `RequiredStatusChecks`<sup>Optional</sup> <a name="RequiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requiredStatusChecks"></a>

```go
RequiredStatusChecks interface{}
```

- *Type:* interface{}

required_status_checks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#required_status_checks BranchProtection#required_status_checks}

---

##### `RequireSignedCommits`<sup>Optional</sup> <a name="RequireSignedCommits" id="@cdktf/provider-github.branchProtection.BranchProtectionConfig.property.requireSignedCommits"></a>

```go
RequireSignedCommits interface{}
```

- *Type:* interface{}

Setting this to 'true' requires all commits to be signed with GPG.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#require_signed_commits BranchProtection#require_signed_commits}

---

### BranchProtectionRequiredPullRequestReviews <a name="BranchProtectionRequiredPullRequestReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotection"

&branchprotection.BranchProtectionRequiredPullRequestReviews {
	DismissalRestrictions: *[]*string,
	DismissStaleReviews: interface{},
	PullRequestBypassers: *[]*string,
	RequireCodeOwnerReviews: interface{},
	RequiredApprovingReviewCount: *f64,
	RequireLastPushApproval: interface{},
	RestrictDismissals: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissalRestrictions">DismissalRestrictions</a></code> | <code>*[]*string</code> | The list of actor Names/IDs with dismissal access. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissStaleReviews">DismissStaleReviews</a></code> | <code>interface{}</code> | Dismiss approved reviews automatically when a new commit is pushed. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.pullRequestBypassers">PullRequestBypassers</a></code> | <code>*[]*string</code> | The list of actor Names/IDs that are allowed to bypass pull request requirements. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireCodeOwnerReviews">RequireCodeOwnerReviews</a></code> | <code>interface{}</code> | Require an approved review in pull requests including files with a designated code owner. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requiredApprovingReviewCount">RequiredApprovingReviewCount</a></code> | <code>*f64</code> | Require 'x' number of approvals to satisfy branch protection requirements. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireLastPushApproval">RequireLastPushApproval</a></code> | <code>interface{}</code> | Require that The most recent push must be approved by someone other than the last pusher. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.restrictDismissals">RestrictDismissals</a></code> | <code>interface{}</code> | Restrict pull request review dismissals. |

---

##### `DismissalRestrictions`<sup>Optional</sup> <a name="DismissalRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissalRestrictions"></a>

```go
DismissalRestrictions *[]*string
```

- *Type:* *[]*string

The list of actor Names/IDs with dismissal access.

If not empty, 'restrict_dismissals' is ignored. Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#dismissal_restrictions BranchProtection#dismissal_restrictions}

---

##### `DismissStaleReviews`<sup>Optional</sup> <a name="DismissStaleReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.dismissStaleReviews"></a>

```go
DismissStaleReviews interface{}
```

- *Type:* interface{}

Dismiss approved reviews automatically when a new commit is pushed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#dismiss_stale_reviews BranchProtection#dismiss_stale_reviews}

---

##### `PullRequestBypassers`<sup>Optional</sup> <a name="PullRequestBypassers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.pullRequestBypassers"></a>

```go
PullRequestBypassers *[]*string
```

- *Type:* *[]*string

The list of actor Names/IDs that are allowed to bypass pull request requirements.

Actor names must either begin with a '/' for users or the organization name followed by a '/' for teams.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#pull_request_bypassers BranchProtection#pull_request_bypassers}

---

##### `RequireCodeOwnerReviews`<sup>Optional</sup> <a name="RequireCodeOwnerReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireCodeOwnerReviews"></a>

```go
RequireCodeOwnerReviews interface{}
```

- *Type:* interface{}

Require an approved review in pull requests including files with a designated code owner.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#require_code_owner_reviews BranchProtection#require_code_owner_reviews}

---

##### `RequiredApprovingReviewCount`<sup>Optional</sup> <a name="RequiredApprovingReviewCount" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requiredApprovingReviewCount"></a>

```go
RequiredApprovingReviewCount *f64
```

- *Type:* *f64

Require 'x' number of approvals to satisfy branch protection requirements.

If this is specified it must be a number between 0-6.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#required_approving_review_count BranchProtection#required_approving_review_count}

---

##### `RequireLastPushApproval`<sup>Optional</sup> <a name="RequireLastPushApproval" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.requireLastPushApproval"></a>

```go
RequireLastPushApproval interface{}
```

- *Type:* interface{}

Require that The most recent push must be approved by someone other than the last pusher.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#require_last_push_approval BranchProtection#require_last_push_approval}

---

##### `RestrictDismissals`<sup>Optional</sup> <a name="RestrictDismissals" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviews.property.restrictDismissals"></a>

```go
RestrictDismissals interface{}
```

- *Type:* interface{}

Restrict pull request review dismissals.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#restrict_dismissals BranchProtection#restrict_dismissals}

---

### BranchProtectionRequiredStatusChecks <a name="BranchProtectionRequiredStatusChecks" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotection"

&branchprotection.BranchProtectionRequiredStatusChecks {
	Contexts: *[]*string,
	Strict: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.contexts">Contexts</a></code> | <code>*[]*string</code> | The list of status checks to require in order to merge into this branch. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.strict">Strict</a></code> | <code>interface{}</code> | Require branches to be up to date before merging. |

---

##### `Contexts`<sup>Optional</sup> <a name="Contexts" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.contexts"></a>

```go
Contexts *[]*string
```

- *Type:* *[]*string

The list of status checks to require in order to merge into this branch.

No status checks are required by default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#contexts BranchProtection#contexts}

---

##### `Strict`<sup>Optional</sup> <a name="Strict" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecks.property.strict"></a>

```go
Strict interface{}
```

- *Type:* interface{}

Require branches to be up to date before merging.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/branch_protection#strict BranchProtection#strict}

---

## Classes <a name="Classes" id="Classes"></a>

### BranchProtectionRequiredPullRequestReviewsList <a name="BranchProtectionRequiredPullRequestReviewsList" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotection"

branchprotection.NewBranchProtectionRequiredPullRequestReviewsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BranchProtectionRequiredPullRequestReviewsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.get"></a>

```go
func Get(index *f64) BranchProtectionRequiredPullRequestReviewsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BranchProtectionRequiredPullRequestReviewsOutputReference <a name="BranchProtectionRequiredPullRequestReviewsOutputReference" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotection"

branchprotection.NewBranchProtectionRequiredPullRequestReviewsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BranchProtectionRequiredPullRequestReviewsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDismissalRestrictions` <a name="ResetDismissalRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissalRestrictions"></a>

```go
func ResetDismissalRestrictions()
```

##### `ResetDismissStaleReviews` <a name="ResetDismissStaleReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetDismissStaleReviews"></a>

```go
func ResetDismissStaleReviews()
```

##### `ResetPullRequestBypassers` <a name="ResetPullRequestBypassers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetPullRequestBypassers"></a>

```go
func ResetPullRequestBypassers()
```

##### `ResetRequireCodeOwnerReviews` <a name="ResetRequireCodeOwnerReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireCodeOwnerReviews"></a>

```go
func ResetRequireCodeOwnerReviews()
```

##### `ResetRequiredApprovingReviewCount` <a name="ResetRequiredApprovingReviewCount" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequiredApprovingReviewCount"></a>

```go
func ResetRequiredApprovingReviewCount()
```

##### `ResetRequireLastPushApproval` <a name="ResetRequireLastPushApproval" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRequireLastPushApproval"></a>

```go
func ResetRequireLastPushApproval()
```

##### `ResetRestrictDismissals` <a name="ResetRestrictDismissals" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.resetRestrictDismissals"></a>

```go
func ResetRestrictDismissals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictionsInput">DismissalRestrictionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput">DismissStaleReviewsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassersInput">PullRequestBypassersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput">RequireCodeOwnerReviewsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput">RequiredApprovingReviewCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApprovalInput">RequireLastPushApprovalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissalsInput">RestrictDismissalsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictions">DismissalRestrictions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviews">DismissStaleReviews</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassers">PullRequestBypassers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews">RequireCodeOwnerReviews</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount">RequiredApprovingReviewCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApproval">RequireLastPushApproval</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissals">RestrictDismissals</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DismissalRestrictionsInput`<sup>Optional</sup> <a name="DismissalRestrictionsInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictionsInput"></a>

```go
func DismissalRestrictionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DismissStaleReviewsInput`<sup>Optional</sup> <a name="DismissStaleReviewsInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviewsInput"></a>

```go
func DismissStaleReviewsInput() interface{}
```

- *Type:* interface{}

---

##### `PullRequestBypassersInput`<sup>Optional</sup> <a name="PullRequestBypassersInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassersInput"></a>

```go
func PullRequestBypassersInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequireCodeOwnerReviewsInput`<sup>Optional</sup> <a name="RequireCodeOwnerReviewsInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviewsInput"></a>

```go
func RequireCodeOwnerReviewsInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredApprovingReviewCountInput`<sup>Optional</sup> <a name="RequiredApprovingReviewCountInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCountInput"></a>

```go
func RequiredApprovingReviewCountInput() *f64
```

- *Type:* *f64

---

##### `RequireLastPushApprovalInput`<sup>Optional</sup> <a name="RequireLastPushApprovalInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApprovalInput"></a>

```go
func RequireLastPushApprovalInput() interface{}
```

- *Type:* interface{}

---

##### `RestrictDismissalsInput`<sup>Optional</sup> <a name="RestrictDismissalsInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissalsInput"></a>

```go
func RestrictDismissalsInput() interface{}
```

- *Type:* interface{}

---

##### `DismissalRestrictions`<sup>Required</sup> <a name="DismissalRestrictions" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissalRestrictions"></a>

```go
func DismissalRestrictions() *[]*string
```

- *Type:* *[]*string

---

##### `DismissStaleReviews`<sup>Required</sup> <a name="DismissStaleReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.dismissStaleReviews"></a>

```go
func DismissStaleReviews() interface{}
```

- *Type:* interface{}

---

##### `PullRequestBypassers`<sup>Required</sup> <a name="PullRequestBypassers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.pullRequestBypassers"></a>

```go
func PullRequestBypassers() *[]*string
```

- *Type:* *[]*string

---

##### `RequireCodeOwnerReviews`<sup>Required</sup> <a name="RequireCodeOwnerReviews" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireCodeOwnerReviews"></a>

```go
func RequireCodeOwnerReviews() interface{}
```

- *Type:* interface{}

---

##### `RequiredApprovingReviewCount`<sup>Required</sup> <a name="RequiredApprovingReviewCount" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requiredApprovingReviewCount"></a>

```go
func RequiredApprovingReviewCount() *f64
```

- *Type:* *f64

---

##### `RequireLastPushApproval`<sup>Required</sup> <a name="RequireLastPushApproval" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.requireLastPushApproval"></a>

```go
func RequireLastPushApproval() interface{}
```

- *Type:* interface{}

---

##### `RestrictDismissals`<sup>Required</sup> <a name="RestrictDismissals" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.restrictDismissals"></a>

```go
func RestrictDismissals() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredPullRequestReviewsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BranchProtectionRequiredStatusChecksList <a name="BranchProtectionRequiredStatusChecksList" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotection"

branchprotection.NewBranchProtectionRequiredStatusChecksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BranchProtectionRequiredStatusChecksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.get"></a>

```go
func Get(index *f64) BranchProtectionRequiredStatusChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BranchProtectionRequiredStatusChecksOutputReference <a name="BranchProtectionRequiredStatusChecksOutputReference" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/branchprotection"

branchprotection.NewBranchProtectionRequiredStatusChecksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BranchProtectionRequiredStatusChecksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContexts` <a name="ResetContexts" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetContexts"></a>

```go
func ResetContexts()
```

##### `ResetStrict` <a name="ResetStrict" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.resetStrict"></a>

```go
func ResetStrict()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contextsInput">ContextsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strictInput">StrictInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contexts">Contexts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strict">Strict</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContextsInput`<sup>Optional</sup> <a name="ContextsInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contextsInput"></a>

```go
func ContextsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StrictInput`<sup>Optional</sup> <a name="StrictInput" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strictInput"></a>

```go
func StrictInput() interface{}
```

- *Type:* interface{}

---

##### `Contexts`<sup>Required</sup> <a name="Contexts" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.contexts"></a>

```go
func Contexts() *[]*string
```

- *Type:* *[]*string

---

##### `Strict`<sup>Required</sup> <a name="Strict" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.strict"></a>

```go
func Strict() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.branchProtection.BranchProtectionRequiredStatusChecksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



