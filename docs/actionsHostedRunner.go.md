# `actionsHostedRunner` Submodule <a name="`actionsHostedRunner` Submodule" id="@cdktf/provider-github.actionsHostedRunner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsHostedRunner <a name="ActionsHostedRunner" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner github_actions_hosted_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionshostedrunner"

actionshostedrunner.NewActionsHostedRunner(scope Construct, id *string, config ActionsHostedRunnerConfig) ActionsHostedRunner
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig">ActionsHostedRunnerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig">ActionsHostedRunnerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageGen">ResetImageGen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageVersion">ResetImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetMaximumRunners">ResetMaximumRunners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetPublicIpEnabled">ResetPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutImage` <a name="PutImage" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putImage"></a>

```go
func PutImage(value ActionsHostedRunnerImage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putTimeouts"></a>

```go
func PutTimeouts(value ActionsHostedRunnerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

---

##### `ResetImageGen` <a name="ResetImageGen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageGen"></a>

```go
func ResetImageGen()
```

##### `ResetImageVersion` <a name="ResetImageVersion" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageVersion"></a>

```go
func ResetImageVersion()
```

##### `ResetMaximumRunners` <a name="ResetMaximumRunners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetMaximumRunners"></a>

```go
func ResetMaximumRunners()
```

##### `ResetPublicIpEnabled` <a name="ResetPublicIpEnabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetPublicIpEnabled"></a>

```go
func ResetPublicIpEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ActionsHostedRunner resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionshostedrunner"

actionshostedrunner.ActionsHostedRunner_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionshostedrunner"

actionshostedrunner.ActionsHostedRunner_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionshostedrunner"

actionshostedrunner.ActionsHostedRunner_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionshostedrunner"

actionshostedrunner.ActionsHostedRunner_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ActionsHostedRunner resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ActionsHostedRunner to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ActionsHostedRunner that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ActionsHostedRunner to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.image">Image</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference">ActionsHostedRunnerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lastActiveOn">LastActiveOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.machineSizeDetails">MachineSizeDetails</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList">ActionsHostedRunnerMachineSizeDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIps">PublicIps</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList">ActionsHostedRunnerPublicIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference">ActionsHostedRunnerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGenInput">ImageGenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersionInput">ImageVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunnersInput">MaximumRunnersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabledInput">PublicIpEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupIdInput">RunnerGroupIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.sizeInput">SizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGen">ImageGen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersion">ImageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunners">MaximumRunners</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabled">PublicIpEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupId">RunnerGroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.size">Size</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.image"></a>

```go
func Image() ActionsHostedRunnerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference">ActionsHostedRunnerImageOutputReference</a>

---

##### `LastActiveOn`<sup>Required</sup> <a name="LastActiveOn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lastActiveOn"></a>

```go
func LastActiveOn() *string
```

- *Type:* *string

---

##### `MachineSizeDetails`<sup>Required</sup> <a name="MachineSizeDetails" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.machineSizeDetails"></a>

```go
func MachineSizeDetails() ActionsHostedRunnerMachineSizeDetailsList
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList">ActionsHostedRunnerMachineSizeDetailsList</a>

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `PublicIps`<sup>Required</sup> <a name="PublicIps" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIps"></a>

```go
func PublicIps() ActionsHostedRunnerPublicIpsList
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList">ActionsHostedRunnerPublicIpsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeouts"></a>

```go
func Timeouts() ActionsHostedRunnerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference">ActionsHostedRunnerTimeoutsOutputReference</a>

---

##### `ImageGenInput`<sup>Optional</sup> <a name="ImageGenInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGenInput"></a>

```go
func ImageGenInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageInput"></a>

```go
func ImageInput() ActionsHostedRunnerImage
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

---

##### `ImageVersionInput`<sup>Optional</sup> <a name="ImageVersionInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersionInput"></a>

```go
func ImageVersionInput() *string
```

- *Type:* *string

---

##### `MaximumRunnersInput`<sup>Optional</sup> <a name="MaximumRunnersInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunnersInput"></a>

```go
func MaximumRunnersInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicIpEnabledInput`<sup>Optional</sup> <a name="PublicIpEnabledInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabledInput"></a>

```go
func PublicIpEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RunnerGroupIdInput`<sup>Optional</sup> <a name="RunnerGroupIdInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupIdInput"></a>

```go
func RunnerGroupIdInput() *f64
```

- *Type:* *f64

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.sizeInput"></a>

```go
func SizeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ImageGen`<sup>Required</sup> <a name="ImageGen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGen"></a>

```go
func ImageGen() interface{}
```

- *Type:* interface{}

---

##### `ImageVersion`<sup>Required</sup> <a name="ImageVersion" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersion"></a>

```go
func ImageVersion() *string
```

- *Type:* *string

---

##### `MaximumRunners`<sup>Required</sup> <a name="MaximumRunners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunners"></a>

```go
func MaximumRunners() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicIpEnabled`<sup>Required</sup> <a name="PublicIpEnabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabled"></a>

```go
func PublicIpEnabled() interface{}
```

- *Type:* interface{}

---

##### `RunnerGroupId`<sup>Required</sup> <a name="RunnerGroupId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupId"></a>

```go
func RunnerGroupId() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.size"></a>

```go
func Size() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsHostedRunnerConfig <a name="ActionsHostedRunnerConfig" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionshostedrunner"

&actionshostedrunner.ActionsHostedRunnerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Image: github.com/cdktf/cdktf-provider-github-go/github.actionsHostedRunner.ActionsHostedRunnerImage,
	Name: *string,
	RunnerGroupId: *f64,
	Size: *string,
	ImageGen: interface{},
	ImageVersion: *string,
	MaximumRunners: *f64,
	PublicIpEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-github-go/github.actionsHostedRunner.ActionsHostedRunnerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.image">Image</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | image block. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.name">Name</a></code> | <code>*string</code> | Name of the hosted runner. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.runnerGroupId">RunnerGroupId</a></code> | <code>*f64</code> | The runner group ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.size">Size</a></code> | <code>*string</code> | Machine size (e.g., '4-core', '8-core'). Can be updated to scale the runner. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageGen">ImageGen</a></code> | <code>interface{}</code> | Whether this runner should be used to generate custom images. Cannot be changed after creation. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageVersion">ImageVersion</a></code> | <code>*string</code> | The version of the runner image to deploy. This is relevant only for runners using custom images. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.maximumRunners">MaximumRunners</a></code> | <code>*f64</code> | Maximum number of runners to scale up to. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.publicIpEnabled">PublicIpEnabled</a></code> | <code>interface{}</code> | Whether to enable static public IP. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.image"></a>

```go
Image ActionsHostedRunnerImage
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image ActionsHostedRunner#image}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the hosted runner.

Must be between 1 and 64 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#name ActionsHostedRunner#name}

---

##### `RunnerGroupId`<sup>Required</sup> <a name="RunnerGroupId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.runnerGroupId"></a>

```go
RunnerGroupId *f64
```

- *Type:* *f64

The runner group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#runner_group_id ActionsHostedRunner#runner_group_id}

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.size"></a>

```go
Size *string
```

- *Type:* *string

Machine size (e.g., '4-core', '8-core'). Can be updated to scale the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#size ActionsHostedRunner#size}

---

##### `ImageGen`<sup>Optional</sup> <a name="ImageGen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageGen"></a>

```go
ImageGen interface{}
```

- *Type:* interface{}

Whether this runner should be used to generate custom images. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image_gen ActionsHostedRunner#image_gen}

---

##### `ImageVersion`<sup>Optional</sup> <a name="ImageVersion" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageVersion"></a>

```go
ImageVersion *string
```

- *Type:* *string

The version of the runner image to deploy. This is relevant only for runners using custom images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image_version ActionsHostedRunner#image_version}

---

##### `MaximumRunners`<sup>Optional</sup> <a name="MaximumRunners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.maximumRunners"></a>

```go
MaximumRunners *f64
```

- *Type:* *f64

Maximum number of runners to scale up to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#maximum_runners ActionsHostedRunner#maximum_runners}

---

##### `PublicIpEnabled`<sup>Optional</sup> <a name="PublicIpEnabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.publicIpEnabled"></a>

```go
PublicIpEnabled interface{}
```

- *Type:* interface{}

Whether to enable static public IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#public_ip_enabled ActionsHostedRunner#public_ip_enabled}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.timeouts"></a>

```go
Timeouts ActionsHostedRunnerTimeouts
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#timeouts ActionsHostedRunner#timeouts}

---

### ActionsHostedRunnerImage <a name="ActionsHostedRunnerImage" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionshostedrunner"

&actionshostedrunner.ActionsHostedRunnerImage {
	Id: *string,
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.id">Id</a></code> | <code>*string</code> | The image ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.source">Source</a></code> | <code>*string</code> | The image source (github, partner, or custom). |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.id"></a>

```go
Id *string
```

- *Type:* *string

The image ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#id ActionsHostedRunner#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.source"></a>

```go
Source *string
```

- *Type:* *string

The image source (github, partner, or custom).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#source ActionsHostedRunner#source}

---

### ActionsHostedRunnerMachineSizeDetails <a name="ActionsHostedRunnerMachineSizeDetails" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionshostedrunner"

&actionshostedrunner.ActionsHostedRunnerMachineSizeDetails {

}
```


### ActionsHostedRunnerPublicIps <a name="ActionsHostedRunnerPublicIps" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionshostedrunner"

&actionshostedrunner.ActionsHostedRunnerPublicIps {

}
```


### ActionsHostedRunnerTimeouts <a name="ActionsHostedRunnerTimeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionshostedrunner"

&actionshostedrunner.ActionsHostedRunnerTimeouts {
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#delete ActionsHostedRunner#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#delete ActionsHostedRunner#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActionsHostedRunnerImageOutputReference <a name="ActionsHostedRunnerImageOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionshostedrunner"

actionshostedrunner.NewActionsHostedRunnerImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionsHostedRunnerImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sizeGb">SizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sizeGb"></a>

```go
func SizeGb() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.internalValue"></a>

```go
func InternalValue() ActionsHostedRunnerImage
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

---


### ActionsHostedRunnerMachineSizeDetailsList <a name="ActionsHostedRunnerMachineSizeDetailsList" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionshostedrunner"

actionshostedrunner.NewActionsHostedRunnerMachineSizeDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ActionsHostedRunnerMachineSizeDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.get"></a>

```go
func Get(index *f64) ActionsHostedRunnerMachineSizeDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ActionsHostedRunnerMachineSizeDetailsOutputReference <a name="ActionsHostedRunnerMachineSizeDetailsOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionshostedrunner"

actionshostedrunner.NewActionsHostedRunnerMachineSizeDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ActionsHostedRunnerMachineSizeDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.cpuCores">CpuCores</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.memoryGb">MemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.storageGb">StorageGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails">ActionsHostedRunnerMachineSizeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuCores`<sup>Required</sup> <a name="CpuCores" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.cpuCores"></a>

```go
func CpuCores() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.memoryGb"></a>

```go
func MemoryGb() *f64
```

- *Type:* *f64

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.storageGb"></a>

```go
func StorageGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() ActionsHostedRunnerMachineSizeDetails
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails">ActionsHostedRunnerMachineSizeDetails</a>

---


### ActionsHostedRunnerPublicIpsList <a name="ActionsHostedRunnerPublicIpsList" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionshostedrunner"

actionshostedrunner.NewActionsHostedRunnerPublicIpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ActionsHostedRunnerPublicIpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.get"></a>

```go
func Get(index *f64) ActionsHostedRunnerPublicIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ActionsHostedRunnerPublicIpsOutputReference <a name="ActionsHostedRunnerPublicIpsOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionshostedrunner"

actionshostedrunner.NewActionsHostedRunnerPublicIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ActionsHostedRunnerPublicIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.length">Length</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps">ActionsHostedRunnerPublicIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.length"></a>

```go
func Length() *f64
```

- *Type:* *f64

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() ActionsHostedRunnerPublicIps
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps">ActionsHostedRunnerPublicIps</a>

---


### ActionsHostedRunnerTimeoutsOutputReference <a name="ActionsHostedRunnerTimeoutsOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-github-go/github/actionshostedrunner"

actionshostedrunner.NewActionsHostedRunnerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ActionsHostedRunnerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



