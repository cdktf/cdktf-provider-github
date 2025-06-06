# `repositoryFile` Submodule <a name="`repositoryFile` Submodule" id="@cdktf/provider-github.repositoryFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryFile <a name="RepositoryFile" id="@cdktf/provider-github.repositoryFile.RepositoryFile"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_file github_repository_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryfile"

repositoryfile.NewRepositoryFile(scope Construct, id *string, config RepositoryFileConfig) RepositoryFile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig">RepositoryFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig">RepositoryFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetAutocreateBranch">ResetAutocreateBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetAutocreateBranchSourceBranch">ResetAutocreateBranchSourceBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetAutocreateBranchSourceSha">ResetAutocreateBranchSourceSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitAuthor">ResetCommitAuthor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitEmail">ResetCommitEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitMessage">ResetCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetOverwriteOnCreate">ResetOverwriteOnCreate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryFile.RepositoryFile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.repositoryFile.RepositoryFile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryFile.RepositoryFile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryFile.RepositoryFile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.repositoryFile.RepositoryFile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.repositoryFile.RepositoryFile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.repositoryFile.RepositoryFile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.repositoryFile.RepositoryFile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryFile.RepositoryFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.repositoryFile.RepositoryFile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.repositoryFile.RepositoryFile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryFile.RepositoryFile.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.repositoryFile.RepositoryFile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryFile.RepositoryFile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.repositoryFile.RepositoryFile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutocreateBranch` <a name="ResetAutocreateBranch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetAutocreateBranch"></a>

```go
func ResetAutocreateBranch()
```

##### `ResetAutocreateBranchSourceBranch` <a name="ResetAutocreateBranchSourceBranch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetAutocreateBranchSourceBranch"></a>

```go
func ResetAutocreateBranchSourceBranch()
```

##### `ResetAutocreateBranchSourceSha` <a name="ResetAutocreateBranchSourceSha" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetAutocreateBranchSourceSha"></a>

```go
func ResetAutocreateBranchSourceSha()
```

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetCommitAuthor` <a name="ResetCommitAuthor" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitAuthor"></a>

```go
func ResetCommitAuthor()
```

##### `ResetCommitEmail` <a name="ResetCommitEmail" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitEmail"></a>

```go
func ResetCommitEmail()
```

##### `ResetCommitMessage` <a name="ResetCommitMessage" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitMessage"></a>

```go
func ResetCommitMessage()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetId"></a>

```go
func ResetId()
```

##### `ResetOverwriteOnCreate` <a name="ResetOverwriteOnCreate" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetOverwriteOnCreate"></a>

```go
func ResetOverwriteOnCreate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryFile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryfile"

repositoryfile.RepositoryFile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryfile"

repositoryfile.RepositoryFile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryfile"

repositoryfile.RepositoryFile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.repositoryFile.RepositoryFile.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryfile"

repositoryfile.RepositoryFile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RepositoryFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryFile.RepositoryFile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RepositoryFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RepositoryFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryFile.RepositoryFile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitSha">CommitSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.sha">Sha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchInput">AutocreateBranchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchSourceBranchInput">AutocreateBranchSourceBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchSourceShaInput">AutocreateBranchSourceShaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitAuthorInput">CommitAuthorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitEmailInput">CommitEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitMessageInput">CommitMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.fileInput">FileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.overwriteOnCreateInput">OverwriteOnCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.repositoryInput">RepositoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranch">AutocreateBranch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchSourceBranch">AutocreateBranchSourceBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchSourceSha">AutocreateBranchSourceSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitAuthor">CommitAuthor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitEmail">CommitEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitMessage">CommitMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.file">File</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.overwriteOnCreate">OverwriteOnCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.repository">Repository</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitSha"></a>

```go
func CommitSha() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Sha`<sup>Required</sup> <a name="Sha" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.sha"></a>

```go
func Sha() *string
```

- *Type:* *string

---

##### `AutocreateBranchInput`<sup>Optional</sup> <a name="AutocreateBranchInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchInput"></a>

```go
func AutocreateBranchInput() interface{}
```

- *Type:* interface{}

---

##### `AutocreateBranchSourceBranchInput`<sup>Optional</sup> <a name="AutocreateBranchSourceBranchInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchSourceBranchInput"></a>

```go
func AutocreateBranchSourceBranchInput() *string
```

- *Type:* *string

---

##### `AutocreateBranchSourceShaInput`<sup>Optional</sup> <a name="AutocreateBranchSourceShaInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchSourceShaInput"></a>

```go
func AutocreateBranchSourceShaInput() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `CommitAuthorInput`<sup>Optional</sup> <a name="CommitAuthorInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitAuthorInput"></a>

```go
func CommitAuthorInput() *string
```

- *Type:* *string

---

##### `CommitEmailInput`<sup>Optional</sup> <a name="CommitEmailInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitEmailInput"></a>

```go
func CommitEmailInput() *string
```

- *Type:* *string

---

##### `CommitMessageInput`<sup>Optional</sup> <a name="CommitMessageInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitMessageInput"></a>

```go
func CommitMessageInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.fileInput"></a>

```go
func FileInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OverwriteOnCreateInput`<sup>Optional</sup> <a name="OverwriteOnCreateInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.overwriteOnCreateInput"></a>

```go
func OverwriteOnCreateInput() interface{}
```

- *Type:* interface{}

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.repositoryInput"></a>

```go
func RepositoryInput() *string
```

- *Type:* *string

---

##### `AutocreateBranch`<sup>Required</sup> <a name="AutocreateBranch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranch"></a>

```go
func AutocreateBranch() interface{}
```

- *Type:* interface{}

---

##### `AutocreateBranchSourceBranch`<sup>Required</sup> <a name="AutocreateBranchSourceBranch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchSourceBranch"></a>

```go
func AutocreateBranchSourceBranch() *string
```

- *Type:* *string

---

##### `AutocreateBranchSourceSha`<sup>Required</sup> <a name="AutocreateBranchSourceSha" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchSourceSha"></a>

```go
func AutocreateBranchSourceSha() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `CommitAuthor`<sup>Required</sup> <a name="CommitAuthor" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitAuthor"></a>

```go
func CommitAuthor() *string
```

- *Type:* *string

---

##### `CommitEmail`<sup>Required</sup> <a name="CommitEmail" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitEmail"></a>

```go
func CommitEmail() *string
```

- *Type:* *string

---

##### `CommitMessage`<sup>Required</sup> <a name="CommitMessage" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitMessage"></a>

```go
func CommitMessage() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.file"></a>

```go
func File() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OverwriteOnCreate`<sup>Required</sup> <a name="OverwriteOnCreate" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.overwriteOnCreate"></a>

```go
func OverwriteOnCreate() interface{}
```

- *Type:* interface{}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.repository"></a>

```go
func Repository() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryFileConfig <a name="RepositoryFileConfig" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/v15/repositoryfile"

&repositoryfile.RepositoryFileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Content: *string,
	File: *string,
	Repository: *string,
	AutocreateBranch: interface{},
	AutocreateBranchSourceBranch: *string,
	AutocreateBranchSourceSha: *string,
	Branch: *string,
	CommitAuthor: *string,
	CommitEmail: *string,
	CommitMessage: *string,
	Id: *string,
	OverwriteOnCreate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.content">Content</a></code> | <code>*string</code> | The file's content. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.file">File</a></code> | <code>*string</code> | The file path to manage. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.repository">Repository</a></code> | <code>*string</code> | The repository name. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.autocreateBranch">AutocreateBranch</a></code> | <code>interface{}</code> | Automatically create the branch if it could not be found. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.autocreateBranchSourceBranch">AutocreateBranchSourceBranch</a></code> | <code>*string</code> | The branch name to start from, if 'autocreate_branch' is set. Defaults to 'main'. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.autocreateBranchSourceSha">AutocreateBranchSourceSha</a></code> | <code>*string</code> | The commit hash to start from, if 'autocreate_branch' is set. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.branch">Branch</a></code> | <code>*string</code> | The branch name, defaults to the repository's default branch. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitAuthor">CommitAuthor</a></code> | <code>*string</code> | The commit author name, defaults to the authenticated user's name. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitEmail">CommitEmail</a></code> | <code>*string</code> | The commit author email address, defaults to the authenticated user's email address. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitMessage">CommitMessage</a></code> | <code>*string</code> | The commit message when creating, updating or deleting the file. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_file#id RepositoryFile#id}. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.overwriteOnCreate">OverwriteOnCreate</a></code> | <code>interface{}</code> | Enable overwriting existing files, defaults to "false". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

The file's content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_file#content RepositoryFile#content}

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.file"></a>

```go
File *string
```

- *Type:* *string

The file path to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_file#file RepositoryFile#file}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.repository"></a>

```go
Repository *string
```

- *Type:* *string

The repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_file#repository RepositoryFile#repository}

---

##### `AutocreateBranch`<sup>Optional</sup> <a name="AutocreateBranch" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.autocreateBranch"></a>

```go
AutocreateBranch interface{}
```

- *Type:* interface{}

Automatically create the branch if it could not be found.

Subsequent reads if the branch is deleted will occur from 'autocreate_branch_source_branch'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_file#autocreate_branch RepositoryFile#autocreate_branch}

---

##### `AutocreateBranchSourceBranch`<sup>Optional</sup> <a name="AutocreateBranchSourceBranch" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.autocreateBranchSourceBranch"></a>

```go
AutocreateBranchSourceBranch *string
```

- *Type:* *string

The branch name to start from, if 'autocreate_branch' is set. Defaults to 'main'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_file#autocreate_branch_source_branch RepositoryFile#autocreate_branch_source_branch}

---

##### `AutocreateBranchSourceSha`<sup>Optional</sup> <a name="AutocreateBranchSourceSha" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.autocreateBranchSourceSha"></a>

```go
AutocreateBranchSourceSha *string
```

- *Type:* *string

The commit hash to start from, if 'autocreate_branch' is set.

Defaults to the tip of 'autocreate_branch_source_branch'. If provided, 'autocreate_branch_source_branch' is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_file#autocreate_branch_source_sha RepositoryFile#autocreate_branch_source_sha}

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

The branch name, defaults to the repository's default branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_file#branch RepositoryFile#branch}

---

##### `CommitAuthor`<sup>Optional</sup> <a name="CommitAuthor" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitAuthor"></a>

```go
CommitAuthor *string
```

- *Type:* *string

The commit author name, defaults to the authenticated user's name.

GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_file#commit_author RepositoryFile#commit_author}

---

##### `CommitEmail`<sup>Optional</sup> <a name="CommitEmail" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitEmail"></a>

```go
CommitEmail *string
```

- *Type:* *string

The commit author email address, defaults to the authenticated user's email address.

GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_file#commit_email RepositoryFile#commit_email}

---

##### `CommitMessage`<sup>Optional</sup> <a name="CommitMessage" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitMessage"></a>

```go
CommitMessage *string
```

- *Type:* *string

The commit message when creating, updating or deleting the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_file#commit_message RepositoryFile#commit_message}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_file#id RepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OverwriteOnCreate`<sup>Optional</sup> <a name="OverwriteOnCreate" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.overwriteOnCreate"></a>

```go
OverwriteOnCreate interface{}
```

- *Type:* interface{}

Enable overwriting existing files, defaults to "false".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_file#overwrite_on_create RepositoryFile#overwrite_on_create}

---



