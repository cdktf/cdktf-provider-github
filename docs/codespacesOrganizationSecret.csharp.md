# `codespacesOrganizationSecret` Submodule <a name="`codespacesOrganizationSecret` Submodule" id="@cdktf/provider-github.codespacesOrganizationSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodespacesOrganizationSecret <a name="CodespacesOrganizationSecret" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/codespaces_organization_secret github_codespaces_organization_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new CodespacesOrganizationSecret(Construct Scope, string Id, CodespacesOrganizationSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig">CodespacesOrganizationSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig">CodespacesOrganizationSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetEncryptedValue">ResetEncryptedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetPlaintextValue">ResetPlaintextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetSelectedRepositoryIds">ResetSelectedRepositoryIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEncryptedValue` <a name="ResetEncryptedValue" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetEncryptedValue"></a>

```csharp
private void ResetEncryptedValue()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPlaintextValue` <a name="ResetPlaintextValue" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetPlaintextValue"></a>

```csharp
private void ResetPlaintextValue()
```

##### `ResetSelectedRepositoryIds` <a name="ResetSelectedRepositoryIds" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.resetSelectedRepositoryIds"></a>

```csharp
private void ResetSelectedRepositoryIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CodespacesOrganizationSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

CodespacesOrganizationSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

CodespacesOrganizationSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

CodespacesOrganizationSecret.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

CodespacesOrganizationSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CodespacesOrganizationSecret resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodespacesOrganizationSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodespacesOrganizationSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/codespaces_organization_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CodespacesOrganizationSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.encryptedValueInput">EncryptedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.plaintextValueInput">PlaintextValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.selectedRepositoryIdsInput">SelectedRepositoryIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.encryptedValue">EncryptedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.plaintextValue">PlaintextValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `EncryptedValueInput`<sup>Optional</sup> <a name="EncryptedValueInput" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.encryptedValueInput"></a>

```csharp
public string EncryptedValueInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PlaintextValueInput`<sup>Optional</sup> <a name="PlaintextValueInput" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.plaintextValueInput"></a>

```csharp
public string PlaintextValueInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `SelectedRepositoryIdsInput`<sup>Optional</sup> <a name="SelectedRepositoryIdsInput" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.selectedRepositoryIdsInput"></a>

```csharp
public double[] SelectedRepositoryIdsInput { get; }
```

- *Type:* double[]

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `EncryptedValue`<sup>Required</sup> <a name="EncryptedValue" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.encryptedValue"></a>

```csharp
public string EncryptedValue { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PlaintextValue`<sup>Required</sup> <a name="PlaintextValue" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.plaintextValue"></a>

```csharp
public string PlaintextValue { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; }
```

- *Type:* double[]

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodespacesOrganizationSecretConfig <a name="CodespacesOrganizationSecretConfig" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new CodespacesOrganizationSecretConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SecretName,
    string Visibility,
    string EncryptedValue = null,
    string Id = null,
    string PlaintextValue = null,
    double[] SelectedRepositoryIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.secretName">SecretName</a></code> | <code>string</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.visibility">Visibility</a></code> | <code>string</code> | Configures the access that repositories have to the organization secret. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.encryptedValue">EncryptedValue</a></code> | <code>string</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/codespaces_organization_secret#id CodespacesOrganizationSecret#id}. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.plaintextValue">PlaintextValue</a></code> | <code>string</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | An array of repository ids that can access the organization secret. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/codespaces_organization_secret#secret_name CodespacesOrganizationSecret#secret_name}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

Configures the access that repositories have to the organization secret.

Must be one of 'all', 'private' or 'selected'. 'selected_repository_ids' is required if set to 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/codespaces_organization_secret#visibility CodespacesOrganizationSecret#visibility}

---

##### `EncryptedValue`<sup>Optional</sup> <a name="EncryptedValue" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.encryptedValue"></a>

```csharp
public string EncryptedValue { get; set; }
```

- *Type:* string

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/codespaces_organization_secret#encrypted_value CodespacesOrganizationSecret#encrypted_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/codespaces_organization_secret#id CodespacesOrganizationSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PlaintextValue`<sup>Optional</sup> <a name="PlaintextValue" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.plaintextValue"></a>

```csharp
public string PlaintextValue { get; set; }
```

- *Type:* string

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/codespaces_organization_secret#plaintext_value CodespacesOrganizationSecret#plaintext_value}

---

##### `SelectedRepositoryIds`<sup>Optional</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.codespacesOrganizationSecret.CodespacesOrganizationSecretConfig.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; set; }
```

- *Type:* double[]

An array of repository ids that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/resources/codespaces_organization_secret#selected_repository_ids CodespacesOrganizationSecret#selected_repository_ids}

---



